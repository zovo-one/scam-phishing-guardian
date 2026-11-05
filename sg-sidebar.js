/* sg-sidebar.js — Scam & Phishing Guardian options-rail sidebar controller.
 * Adapted from engine/5-design-ux-ui-monetization/monetization/sg-sidebar.js:
 *   - tier source is THIS extension's storage key (scam_guardian_pro_status,
 *     written only by the service worker) — not the fleet zovo_license key.
 *   - the Rate card is permanently removed fleet-wide (CWS §A review
 *     solicitation), so there is no rate-gating logic here at all.
 * Reveals the Pro card for Free users, hides it for Pro, and live-syncs when
 * the SW flips pro_status (e.g. after a successful license verify). */
(function () {
  var PRO_STATUS_KEY = 'scam_guardian_pro_status';

  function get(key) {
    try {
      return chrome.storage.local.get(key).then(function (out) { return out[key]; });
    } catch (e) {
      return Promise.resolve(undefined);
    }
  }

  function applyTier(tier) {
    var proCard = document.querySelector('[data-zs="pro"]');
    if (proCard) proCard.hidden = tier === 'pro';
  }

  function init() {
    get(PRO_STATUS_KEY).then(function (status) {
      applyTier(status === 'pro' ? 'pro' : 'free');
    });
    try {
      chrome.storage.onChanged.addListener(function (changes, area) {
        if (area !== 'local') return;
        var change = changes[PRO_STATUS_KEY];
        if (!change) return;
        applyTier(change.newValue === 'pro' ? 'pro' : 'free');
      });
    } catch (e) { /* listener unavailable — static markup still correct */ }
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
