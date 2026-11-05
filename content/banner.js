"use strict";(()=>{var banner_default=`/**
 * src/content/banner.css \u2014 Warning-banner stylesheet (closed shadow root).
 *
 * Owned by: BUILDER (pixels with SURFACE). esbuild inlines this file as a
 * TEXT import in banner.ts (loader '.css':'text' \u2014 see shared/css-text.d.ts)
 * and the banner adopts it via CSSStyleSheet.adoptedStyleSheets, which is
 * NOT subject to the host page's style-src CSP (the whole reason for the
 * pattern). esbuild also emits dist/content/banner.css as a static asset.
 *
 * Tokens: mirrors src/styles/sg-base.css VALUES on :host (the banner cannot
 * @import that file \u2014 CSSStyleSheet.replaceSync throws on @import rules).
 * Keep these in sync with sg-base.css: brand purple #6C5CE7, calm amber
 * #B45309 (the fleet AA patch \u2014 never #F59E0B on tinted surfaces), Inter.
 *
 * WCAG AA on the amber surface: body #1F2937 / secondary #4B5563 on #FFFBEB,
 * accent #B45309 (never #6B7280 on tinted surfaces).
 * Scoped under :host \u2014 the sheet applies inside the closed shadow only.
 */

:host {
  all: initial;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2147483647;
  /* sg-base.css token mirror (see file header) */
  --sg-primary: #6C5CE7;
  --sg-primary-dark: #5A4BD1;
  --sg-pro: #B45309;
  --sg-pro-dark: #92400E;
  --sg-text: #1A1A2E;
  --sg-text-secondary: #4B5563;
  --sg-border: #E5E7EB;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.45;
  color: #1F2937;
}

.sg-banner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  background: #FFFBEB;
  border-bottom: 2px solid var(--sg-pro);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.sg-icon {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  color: var(--sg-pro);
}

.sg-body {
  flex: 1 1 auto;
  min-width: 0;
}

.sg-headline {
  margin: 0 0 2px;
  font-size: 15px;
  font-weight: 700;
  color: var(--sg-pro);
}

.sg-domain {
  font-weight: 600;
  word-break: break-all;
}

.sg-reason {
  margin: 0 0 4px;
  color: #1F2937;
}

.sg-sub {
  margin: 0;
  font-size: 12px;
  color: var(--sg-text-secondary);
}

.sg-actions {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-left: 8px;
}

.sg-btn {
  appearance: none;
  box-sizing: border-box;
  padding: 7px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  white-space: nowrap;
}

.sg-btn:focus-visible {
  outline: 2px solid var(--sg-text);
  outline-offset: 2px;
}

.sg-btn-leave {
  background: var(--sg-pro);
  color: #FFFFFF;
}

.sg-btn-leave:hover {
  background: var(--sg-pro-dark);
}

.sg-btn-continue {
  background: #FFFFFF;
  color: #1F2937;
  border-color: #D1D5DB;
}

.sg-btn-continue:hover {
  background: #F3F4F6;
}

.sg-btn-safe {
  background: transparent;
  color: var(--sg-text-secondary);
  border-color: transparent;
  text-decoration: underline;
  font-weight: 500;
}

.sg-btn-safe:hover {
  color: #1F2937;
}

/* one-time polite post-success note (never repeated, always respectful) */
.sg-note {
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  background: #F1F2F4;
  border-bottom: 1px solid #D1D5DB;
  color: #1F2937;
  font-size: 13px;
}

.sg-note-text {
  flex: 1 1 auto;
  margin: 0;
}

.sg-note-cta {
  color: var(--sg-primary-dark);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.sg-note-cta:hover {
  text-decoration: underline;
}

.sg-note-dismiss {
  flex: 0 0 auto;
  background: transparent;
  border: none;
  color: var(--sg-text-secondary);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 6px;
}

@media (max-width: 720px) {
  .sg-banner {
    flex-direction: column;
  }
  .sg-actions {
    margin-left: 0;
  }
}
`;function getMessage(key,fallback){try{return chrome.i18n.getMessage(key)||fallback}catch{return fallback}}var BANNER_GLOBAL_FLAG="__SCAM_GUARDIAN_BANNER__",BANNER_SESSION_KEY_PREFIX="scam_guardian_banner_";var CHECKOUT_URL_BASE="https://zovo.one/pricing?utm_source=scam-guardian&utm_medium=extension&utm_campaign=upgrade&utm_content=";function PRICING_URL(surface){return`${CHECKOUT_URL_BASE}${surface}`}var FUNNEL_EVENTS_KEY="scam_guardian_funnel_events",INSTALL_ID_KEY="scam_guardian_install_id",VARIANT_KEY="scam_guardian_variant";var EXT_KEY="scam-guardian",_sink=null;var cachedInstallId=null,cachedVariant=null;function fnv32(s){let h=2166136261,bound=Math.min(s.length,64);for(let i=0;i<bound;i++)h^=s.charCodeAt(i),h=Math.imul(h,16777619);return h>>>0}function randomUuid(){try{return crypto.randomUUID()}catch{return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{let r=Math.floor(Math.random()*16);return(c==="x"?r:r&3|8).toString(16)})}}async function ensureInstallId(){if(cachedInstallId!==null)return cachedInstallId;try{let out=await chrome.storage.local.get([INSTALL_ID_KEY,VARIANT_KEY]),idRaw=out[INSTALL_ID_KEY];if(typeof idRaw=="string"&&idRaw.length>=8)return cachedInstallId=idRaw,cachedVariant=out[VARIANT_KEY]==="B"?"B":"A",cachedInstallId}catch{}let id=randomUuid(),variant=(fnv32(id)&1)===1?"B":"A";cachedInstallId=id,cachedVariant=variant;try{await chrome.storage.local.set({[INSTALL_ID_KEY]:id,[VARIANT_KEY]:variant})}catch{}return id}function currentExp(){return""}function logFunnelEvent(event){(async()=>{try{let raw=(await chrome.storage.local.get(FUNNEL_EVENTS_KEY))[FUNNEL_EVENTS_KEY],events=Array.isArray(raw)?raw:[];events.push({...event,ts:event.ts||new Date().toISOString()}),events.length>100&&events.splice(0,events.length-100),await chrome.storage.local.set({[FUNNEL_EVENTS_KEY]:events})}catch{}})()}function emit(name,data){let surface=String(data.surface??"sw");logFunnelEvent({type:name,ts:"",surface}),(async()=>{try{let installId=await ensureInstallId(),detail={t:Date.now(),installId,extKey:EXT_KEY,surface,variant:cachedVariant??"A",exp:currentExp(),...data};_sink!==null&&_sink(name,detail)}catch{}})()}var HOST_ID="sg-scam-guardian-banner";function readGlobalPayload(){try{let raw=globalThis[BANNER_GLOBAL_FLAG];if(typeof raw!="object"||raw===null)return null;let r=raw;if(typeof r.domain!="string"||typeof r.reason!="string")return null;let tabId=typeof r.tabId=="number"?r.tabId:void 0;return tabId===void 0?{domain:r.domain,reason:r.reason}:{domain:r.domain,reason:r.reason,tabId}}catch{return null}}async function readSessionPayload(hostname){try{let key=`${BANNER_SESSION_KEY_PREFIX}${hostname}`,raw=(await chrome.storage.session.get(key))[key];if(typeof raw!="object"||raw===null)return null;let r=raw;return typeof r.domain!="string"||typeof r.reason!="string"?null:{domain:r.domain,reason:r.reason}}catch{return null}}function shieldSvg(){let NS="http://www.w3.org/2000/svg",svg=document.createElementNS(NS,"svg");svg.setAttribute("viewBox","0 0 24 24"),svg.setAttribute("width","28"),svg.setAttribute("height","28"),svg.setAttribute("fill","none"),svg.setAttribute("aria-hidden","true");let path=document.createElementNS(NS,"path");return path.setAttribute("d","M12 2l8 3.5v5.2c0 4.9-3.4 9.4-8 10.8-4.6-1.4-8-5.9-8-10.8V5.5L12 2zm0 5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"),path.setAttribute("fill","currentColor"),svg.appendChild(path),svg}function el(tag,className,text){let node=document.createElement(tag);return node.className=className,text!==void 0&&(node.textContent=text),node}function send(msg){return chrome.runtime.sendMessage(msg).then(reply=>typeof reply=="object"&&reply!==null?reply:null).catch(()=>null)}function teardown(host){host.remove()}function renderProNote(root,host){let note=el("div","sg-note");note.setAttribute("role","status");let text=el("p","sg-note-text",getMessage("bannerProNote","Caught. Pro also checks today\u2019s newest phishing domains.")),cta=document.createElement("a");cta.className="sg-note-cta",cta.href=PRICING_URL("post-success"),cta.target="_blank",cta.rel="noopener noreferrer",cta.textContent=getMessage("bannerProNoteCta","See both plans \u2192"),cta.addEventListener("click",()=>{emit("cta_click",{surface:"banner"})});let dismiss=document.createElement("button");dismiss.type="button",dismiss.className="sg-note-dismiss",dismiss.setAttribute("aria-label",getMessage("bannerGotIt","Got it")),dismiss.textContent="\xD7",dismiss.addEventListener("click",()=>teardown(host)),note.appendChild(text),note.appendChild(cta),note.appendChild(dismiss);let banner=root.querySelector(".sg-banner");banner!==null&&banner.replaceWith(note),window.setTimeout(()=>teardown(host),8e3)}function render(root,host,payload){let banner=el("div","sg-banner");banner.setAttribute("role","alert");let icon=el("span","sg-icon");icon.appendChild(shieldSvg());let body=el("div","sg-body");body.appendChild(el("p","sg-headline",getMessage("bannerHeadline","This site looks risky. Stop here.")));let reason=el("p","sg-reason"),domain=el("span","sg-domain",payload.domain);reason.appendChild(domain),reason.appendChild(document.createTextNode(` \xB7 ${payload.reason}`)),body.appendChild(reason),body.appendChild(el("p","sg-sub",getMessage("bannerSub","Checked on your device against public threat lists. Nothing was blocked. You decide.")));let actions=el("div","sg-actions"),leaveBtn=document.createElement("button");leaveBtn.type="button",leaveBtn.className="sg-btn sg-btn-leave",leaveBtn.textContent=getMessage("bannerLeave","Leave this site");let continueBtn=document.createElement("button");continueBtn.type="button",continueBtn.className="sg-btn sg-btn-continue",continueBtn.textContent=getMessage("bannerContinue","Continue anyway");let safeBtn=document.createElement("button");safeBtn.type="button",safeBtn.className="sg-btn sg-btn-safe",safeBtn.textContent=getMessage("bannerSafe","This is safe");let tabId=payload.tabId??0;leaveBtn.addEventListener("click",()=>{send({action:"BANNER_ACTION",tabId,kind:"leave",domain:payload.domain}),teardown(host)}),continueBtn.addEventListener("click",()=>{send({action:"BANNER_ACTION",tabId,kind:"dismiss",domain:payload.domain}).then(reply=>{if(reply!==null&&reply.proNote===!0){renderProNote(root,host);return}teardown(host)})}),safeBtn.addEventListener("click",()=>{send({action:"BANNER_ACTION",tabId,kind:"allowlist",domain:payload.domain}).then(()=>teardown(host))}),actions.appendChild(leaveBtn),actions.appendChild(continueBtn),actions.appendChild(safeBtn),banner.appendChild(icon),banner.appendChild(body),banner.appendChild(actions),root.appendChild(banner)}async function main(){if(document.getElementById(HOST_ID)!==null)return;let hostname=location.hostname.toLowerCase(),payload=readGlobalPayload()??await readSessionPayload(hostname);if(payload===null)return;let host=document.createElement("div");host.id=HOST_ID;let root=host.attachShadow({mode:"closed"});try{let sheet=new CSSStyleSheet;sheet.replaceSync(banner_default),root.adoptedStyleSheets=[sheet]}catch(err){console.warn("[scam-guardian] adoptedStyleSheets failed:",err);let style=document.createElement("style");style.textContent=banner_default,root.appendChild(style)}(document.documentElement??document).appendChild(host),render(root,host,payload)}main();})();
