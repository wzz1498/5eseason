/* Dedicated first-detail-screen layout for the season recap. */
function overviewStat(label, value, previous, direction){
  return `<article class="recap-stat"><span>${label}</span><strong>${value}</strong><small>${direction} 上赛季 ${previous}</small></article>`;
}

function summary(){
  return `<div class="page summary recap-detail"><div class="summary-main">
    <header class="recap-detail-head">
      <div class="recap-brand"><b class="logo">5E</b><span>｜2026 S4 赛季回顾</span></div>
      <div class="recap-player"><span class="avatar">北</span><b>北岛</b></div>
    </header>
    <section class="recap-overview">
      <div class="recap-rank">
        ${rankIcon('A+','recap-rank-icon')}
        <span>赛季结算段位</span>
        <b>A+</b>
      </div>
      <div class="recap-stats" aria-label="赛季核心数据">
        ${overviewStat('Rating','1.18','1.09','↑')}
        ${overviewStat('胜率','58.5%','53.2%','↑')}
        ${overviewStat('KD','1.22','1.14','↑')}
      </div>
    </section>
    <section class="recap-main-grid">
      <article class="recap-profile">
        <small>赛季本命评语</small>
        <h1>暴力枪霸</h1>
        <p>打起突破大旗，为队伍打开局面，是获胜的关键拼图！</p>
        <div class="recap-traits">
          <span><b>32%</b> 首杀尝试率</span>
          <span><b>57%</b> 突破成功率</span>
          <span><b>71%</b> 首杀后胜率</span>
        </div>
      </article>
      <aside class="recap-highlights">
        <small>本季高光</small>
        <article><b>百米投手</b><span>投掷物命中率达到 57%</span></article>
        <article><b>电光石火般</b><span>不犹豫！平均反应时间 276ms</span></article>
        <article><b>悍匪</b><span>T 阵营获胜率达到 71%</span></article>
      </aside>
    </section>
    <section class="recap-chart-panel">
      <div class="recap-chart-caption"><span>S3 赛季结算段位</span><b>赛季最高 A++</b></div>
      ${chart()}
    </section>
  </div>${signature()}</div>`;
}

const recapDetailStyle=document.createElement('style');
recapDetailStyle.textContent=`
.recap-detail{background:#050505!important;color:#f5f5f5!important;padding:31px 48px 0!important}
.recap-detail .summary-main{width:auto!important;position:relative;z-index:1}
.recap-detail .page-signature{color:#767676;left:48px;right:48px}
.recap-detail-head{height:58px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid #5b5b5b;padding-bottom:17px}
.recap-brand{display:flex;align-items:center;gap:8px;font-weight:700;font-size:18px}.recap-brand .logo{color:#fff;font-size:28px;border:0;padding:0;letter-spacing:-3px}.recap-player{display:flex;gap:12px;align-items:center;font-size:19px}.recap-player .avatar{width:38px;height:38px;border-radius:2px;font-size:20px}
.recap-overview{height:112px;display:grid;grid-template-columns:1fr auto;align-items:center;border-bottom:1px solid #5b5b5b}.recap-rank{display:flex;align-items:center;gap:11px}.recap-rank-icon{display:block;width:58px;height:58px;background-size:648px 435px;background-position:-319px -244px}.recap-rank span{font-size:15px}.recap-rank b{font:800 27px Arial;color:#eb6e36}
.recap-stats{display:flex}.recap-stat{min-width:104px;padding:0 20px;border-left:1px solid #5b5b5b}.recap-stat span,.recap-stat small{display:block;font-size:12px}.recap-stat strong{display:block;font:800 30px/1.1 Arial;margin:3px 0}.recap-stat small{color:#a4ce58}
.recap-main-grid{display:grid;grid-template-columns:minmax(0,1fr) 400px;min-height:230px;border-bottom:1px solid #5b5b5b}.recap-profile{padding:18px 28px 17px 0;border-right:1px solid #5b5b5b}.recap-profile>small,.recap-highlights>small{font-size:13px;font-weight:700}.recap-profile h1{font-size:45px;line-height:1;margin:23px 0 13px;letter-spacing:-2px}.recap-profile p{margin:0;font-size:17px}.recap-traits{display:flex;gap:30px;margin-top:27px}.recap-traits span{font-size:12px}.recap-traits b{font:800 23px Arial;margin-right:6px}
.recap-highlights{padding:18px 0 15px 25px}.recap-highlights>small{display:block;text-align:right;margin-bottom:8px}.recap-highlights article{min-height:50px;border:1px solid #7a7a7a;padding:8px 10px;margin-top:9px}.recap-highlights b,.recap-highlights span{display:block}.recap-highlights b{font-size:15px}.recap-highlights span{font-size:11px;margin-top:4px;color:#dedede}
.recap-chart-panel{position:relative;height:220px;margin-top:16px;padding:14px 26px 0;background:#f7f8fa;color:#111;overflow:hidden}.recap-chart-panel .chart-box{height:188px}.recap-chart-panel .chart-box svg{height:178px;width:100%}.recap-chart-panel .chart-peak{right:8px;top:25px}.recap-chart-caption{position:absolute;z-index:2;top:15px;left:28px;right:28px;display:flex;justify-content:space-between;font-size:11px;color:#606e86}.recap-chart-caption b{color:#37465c}.recap-chart-panel .chart-tip{color:#fff}.recap-detail .section-title{display:none}
@media(max-width:900px){.recap-detail{padding:24px 30px 0!important}.recap-main-grid{grid-template-columns:1fr}.recap-highlights{display:none}.recap-profile{border-right:0}.recap-stats{gap:0}.recap-stat{min-width:86px;padding:0 10px}.recap-traits{gap:14px}.recap-detail .page-signature{left:30px;right:30px}}
`;
document.head.appendChild(recapDetailStyle);

// Prototype records. Replace this array with the player's season matches when wired to data.
const seasonHighlightMatches=[
  {id:'best',result:'win',map:'MIRAGE',date:'6月21日 20:31',score:'16 : 14',rounds:30,rating:1.86,kills:32,deaths:14,assists:7,special:{oneVFive:1,fiveKills:1,oneVFour:0,fourKills:2,firstKills:8}},
  {id:'longest',result:'loss',map:'INFERNO',date:'7月19日 21:08',score:'19 : 20',rounds:39,rating:1.14,kills:26,deaths:25,assists:9,players:{ownEvp:{id:'ally',name:'晚风',avatar:'晚',kda:'30 / 23 / 8',rating:'1.31',rws:'14.2'},enemyMvp:{id:'rival',name:'NOVA',avatar:'N',kda:'34 / 21 / 8',rating:'1.48',rws:'15.6'},self:{id:'self',name:'北岛',avatar:'北',kda:'26 / 25 / 9',rating:'1.14',rws:'12.8'}}},
  {id:'burn',result:'loss',map:'ANCIENT',date:'8月3日 19:42',score:'11 : 13',rounds:24,rating:1.64,kills:29,deaths:18,assists:6,special:{oneVFive:0,fiveKills:0,oneVFour:1,fourKills:2,firstKills:7}}
];
const matchDemoModes=['完整数据','部分缺失','全部为空'];
let matchDemoMode=0;

function pickSeasonMatch(matches,predicate,compare){
  const candidates=matches.filter(predicate).sort(compare);
  const first=candidates[0];
  if(!first)return null;
  const tied=candidates.filter(match=>compare(match,first)===0);
  return tied[Math.floor(Math.random()*tied.length)];
}

function selectedSeasonHighlights(matches){
  const best=pickSeasonMatch(matches,match=>match.result==='win',(a,b)=>b.rating-a.rating||b.kills-a.kills);
  const longest=pickSeasonMatch(matches,()=>true,(a,b)=>b.rounds-a.rounds);
  const burn=pickSeasonMatch(matches,match=>match.result==='loss',(a,b)=>b.rating-a.rating||b.kills-a.kills);
  // A match belongs to only one card. Priority: best match, longest match, burning fight.
  return {best,longest:longest&&longest.id!==best?.id?longest:null,burn:burn&&burn.id!==best?.id&&burn.id!==longest?.id?burn:null};
}

function matchSpecials(match){
  const fields=[['oneVFive','1v5'],['fiveKills','五杀'],['oneVFour','1v4'],['fourKills','四杀'],['firstKills','首杀']];
  return fields.filter(([key])=>(match.special?.[key]||0)>0).slice(0,3).map(([key,label])=>`<span><b>${match.special[key]}</b> 次${label}</span>`).join('');
}

function matchCardHeader(number,title,match){
  const map=maps.find(item=>item.name===match.map);
  return `<div class="match-card-head"><div><h3>${title}</h3></div><span class="match-card-map">${map?`<span class="match-card-map-icon">${mapLogo(map)}</span>`:''}<span><b>${match.map}</b><time>${match.date}</time></span></span></div>`;
}

function matchCardAtmosphere(match){
  const index=maps.findIndex(item=>item.name===match.map);
  if(index<0)return '';
  const photoX=[38,267,497,727,958,1187,1418][index];
  return `<span class="match-card-atmosphere" aria-hidden="true" style="background-position:-${photoX}px -451px"></span>`;
}

function matchEmptyCard(number,title,copy,kind){
  return `<article class="season-match-card season-match-${kind} is-empty">${matchCardHeader(number,title,{map:'--',date:'--'})}<div class="match-empty-body"><span aria-hidden="true">—</span><p>${copy}</p></div></article>`;
}

function featureMatchCard(number,title,match,kind,copy){
  if(!match)return matchEmptyCard(number,title,kind==='best'?'暂无符合条件的胜利对局':'暂无符合条件的失利对局',kind);
  const special=matchSpecials(match);
  return `<article class="season-match-card season-match-${kind}">
    ${matchCardAtmosphere(match)}
    ${matchCardHeader(number,title,match)}
    <p class="match-card-quote">${copy}</p>
    <div class="match-feature-content"><div class="match-feature-score"><small>本场比分</small><strong>${match.score}</strong><span>${kind==='best'?'胜利':'失利'}</span></div><div class="match-feature-stats"><span>K / D / A <b>${match.kills} / ${match.deaths} / ${match.assists}</b></span><span>Rating <b>${match.rating.toFixed(2)}</b></span></div></div>
    <div class="match-feature-foot"><div class="match-specials">${special||'<span>本场暂无特殊击杀数据</span>'}</div></div>
  </article>`;
}

function longestMatchPlayers(match){
  const roleOrder=match.result==='win'?[['ownMvp','我方 MVP'],['enemyEvp','敌方 EVP'],['self','我']]:match.result==='loss'?[['ownEvp','我方 EVP'],['enemyMvp','敌方 MVP'],['self','我']]:[['mvp','MVP'],['self','我']];
  const seen=new Set();
  return roleOrder.map(([key,label])=>({label,player:match.players?.[key]})).filter(({player})=>{if(!player||seen.has(player.id))return false;seen.add(player.id);return true});
}

function longestMatchCard(match){
  if(!match)return matchEmptyCard('02','巅峰鏖战','暂无可展示的巅峰鏖战','longest');
  const result={win:'艰难取胜',loss:'遗憾落败',draw:'平局'}[match.result]||'--';
  const players=longestMatchPlayers(match);
  return `<article class="season-match-card season-match-longest">
    ${matchCardAtmosphere(match)}
    ${matchCardHeader('02','巅峰鏖战',match)}
    <p class="match-card-quote match-longest-quote">鏖战 <strong>${match.rounds}</strong> 回合，${match.rounds>35?'天亮之前，谁也别想走。':'每一回合都要战到最后。'}</p>
    <div class="match-longest-overview"><strong>${match.score}</strong><em class="match-result-${match.result}">${result}</em></div>
    <div class="match-player-table"><div class="match-player-table-head"><span>本场焦点</span><span>K / D / A</span><span>Rating</span><span>RWS</span></div>${players.map(({label,player})=>`<div class="match-player-row"><span class="match-player-identity"><i>${player.avatar||'?'}</i><b>${player.name}</b><small>${label}</small></span><span>${player.kda}</span><span>${player.rating}</span><span>${player.rws}</span></div>`).join('')||'<div class="match-player-fallback">暂无本场选手数据</div>'}</div>
  </article>`;
}

function seasonMatchHighlights(){
  const matches=matchDemoMode===2?[]:matchDemoMode===1?seasonHighlightMatches.filter(match=>match.id==='best'):seasonHighlightMatches;
  const {best,longest,burn}=selectedSeasonHighlights(matches);
  return `<div class="season-match-stack">${featureMatchCard('01','最佳单场',best,'best','胜利的天平由我掌握。')}${longestMatchCard(longest)}${featureMatchCard('03','燃尽之战',burn,'burn','战至终章，我仍在追逐胜利。')}</div>`;
}

document.addEventListener('click',event=>{
  if(!event.target.closest('[data-match-demo-toggle]'))return;
  matchDemoMode=(matchDemoMode+1)%matchDemoModes.length;
  render();
  document.querySelector('[data-match-demo-toggle]')?.focus();
});

function mapReport(){
  const totalGames=maps.reduce((n,m)=>n+m.games,0);
  const bestWin=maps.reduce((best,m)=>m.wins/m.games>best.wins/best.games?m:best,maps[0]);
  const mostScore=maps.reduce((best,m)=>m.net>best.net?m:best,maps[0]);
  const overview=[['地图游玩场次',`${totalGames} 场`],['胜率最高',bestWin.name,`${percent(bestWin)}%`],['上分最多',mostScore.name,`+${num(mostScore.net)}`]];
  return `<div class="page maps maps-heptagon match-highlights-page">${header('','')}<div class="map-report-columns"><section class="map-radar-panel"><h2 class="section-title">地图偏好 </h2><div class="map-overview-cards">${overview.map(([label,value,detail])=>`<article><small>${label}</small><b>${value}</b>${detail?`<span>${detail}</span>`:''}</article>`).join('')}</div><div class="map-season-line">赛季共进行 <strong>${totalGames}</strong> 场对局</div>${mapPreferenceRadar()}<p class="map-summary">来到 <b>DUST II</b> 就和回家一样~</p></section><section class="map-highlights-panel"><div class="match-panel-heading"><h2 class="section-title">高光对局</h2><button type="button" class="match-demo-toggle" data-match-demo-toggle data-no-export aria-label="切换对局高光样例状态，当前${matchDemoModes[matchDemoMode]}">示例：${matchDemoModes[matchDemoMode]} ↻</button></div>${seasonMatchHighlights()}</section></div>${signature()}</div>`;
}

const matchHighlightStyle=document.createElement('style');
matchHighlightStyle.textContent=`
.match-highlights-page .map-highlights-panel{padding:15px 17px;min-height:565px}
.match-panel-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}.maps-heptagon .map-report-columns .match-panel-heading .section-title{margin:0}.match-demo-toggle{border:1px solid #c6d7f1;border-radius:12px;background:#fff;color:#537099;font:600 10px Arial;padding:5px 9px;cursor:pointer;white-space:nowrap}.match-demo-toggle:hover,.match-demo-toggle:focus-visible{border-color:#1464ed;color:#125bd2;outline:none}
.season-match-stack{display:grid;gap:8px}.season-match-card{--match-accent:#1464ec;position:relative;overflow:hidden;min-width:0;box-sizing:border-box;border:1px solid #d2dff1;border-left:3px solid var(--match-accent);border-radius:6px;background:#fff;padding:10px 12px;color:#233b5c}.season-match-card>*:not(.match-card-atmosphere){position:relative;z-index:1}.season-match-best{background:linear-gradient(105deg,#fff 65%,#eef5ff)}.season-match-longest{--match-accent:#e47921;background:linear-gradient(110deg,#fff 65%,#fff6eb)}.season-match-burn{--match-accent:#7550d5;background:linear-gradient(110deg,#fff 65%,#f7f2ff)}
.match-card-atmosphere{position:absolute;top:0;right:0;width:217px;height:113px;background-image:url('assets/maps-reference.png');background-size:1672px 941px;background-repeat:no-repeat;opacity:.12;filter:grayscale(1);-webkit-mask-image:linear-gradient(90deg,transparent,#000 45%);mask-image:linear-gradient(90deg,transparent,#000 45%);pointer-events:none}
.match-card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.match-card-head small{display:block;font:700 9px Arial;letter-spacing:.6px;color:var(--match-accent)}.match-card-head h3{margin:2px 0 0;font-size:17px;line-height:1.1;color:#1b2c46}.match-card-map{display:flex;align-items:center;gap:5px;color:#71829b;white-space:nowrap}.match-card-map>span:last-child{display:flex;flex-direction:column;align-items:flex-start;gap:2px}.match-card-map b{font:800 11px Arial;color:#415c7c}.match-card-map time{font-size:10px;color:#8192a8}.match-card-map-icon{display:block;position:relative;width:33px;height:29px;overflow:hidden;flex:none}.match-card-map-icon .map-logo{position:absolute;left:0;top:0;width:48px;height:42px;background-position-y:-563px!important;transform:scale(.68);transform-origin:top left}.match-card-head i{font-style:normal;color:#b2bfd0}
.match-card-quote{margin:10px 0 9px;font-size:20px;line-height:1.3;font-weight:800;letter-spacing:.2px;color:var(--match-accent)}
.match-feature-content{display:flex;align-items:end;justify-content:space-between;gap:8px;border-top:1px solid #e4eaf4;padding-top:8px}.match-feature-score{display:flex;align-items:baseline;gap:8px;white-space:nowrap}.match-feature-score small{color:#7c8ba0;font-size:10px}.match-feature-score strong{font:800 24px/1 Arial;color:#263b58}.match-feature-score>span{font-size:10px;font-weight:700;color:var(--match-accent)}.match-feature-stats{display:flex;gap:11px;color:#6e7e96;font-size:11px;white-space:nowrap}.match-feature-stats b{color:#253a57;font-size:13px;margin-left:3px}.match-feature-foot{display:flex;align-items:center;gap:8px;margin-top:7px}.match-specials{display:flex;gap:10px;min-width:0;color:#667b97;font-size:10px;white-space:nowrap}.match-specials b{color:var(--match-accent);font-size:13px}
.match-longest-overview{display:flex;align-items:baseline;gap:12px;border-top:1px solid #e4eaf4;padding-top:7px;margin:0 0 7px}.match-longest-overview span{color:#687d99;font-size:11px}.match-longest-overview span b{font:800 23px Arial;color:#263b58}.match-longest-overview strong{font:800 20px Arial;color:#253b58}.match-longest-overview em{font-style:normal;font-size:10px;font-weight:700;color:#e47921}.match-player-table{border-top:1px solid #e4eaf4}.match-player-table-head,.match-player-row{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(80px,1fr) 57px 48px;align-items:center;gap:5px}.match-player-table-head{height:19px;color:#8997aa;font-size:9px}.match-player-row{min-height:26px;border-top:1px solid #edf1f7;color:#4c607b;font-size:10px}.match-player-identity{display:flex;align-items:center;gap:5px;min-width:0}.match-player-identity i{display:grid;place-items:center;width:18px;height:18px;flex:none;border-radius:4px;background:#e4862b;color:white;font-size:10px;font-style:normal;font-weight:800}.match-player-identity b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;color:#253b58}.match-player-identity small{font-size:9px;color:#d47a25;white-space:nowrap}.match-player-fallback{padding:12px;text-align:center;font-size:11px;color:#93a2b7}
.season-match-card.is-empty{background:#f8faff;border-style:dashed;border-left-style:solid}.match-empty-body{height:70px;display:flex;align-items:center;justify-content:center;gap:7px;color:#9ba9bc}.match-empty-body span{font-size:22px}.match-empty-body p{font-size:11px;margin:0}
.match-longest-quote strong{font:900 26px/1 Arial;color:#d96221;vertical-align:-1px}.season-match-longest .match-longest-overview em{font-size:13px;font-weight:800;border-radius:4px;padding:5px 10px;white-space:nowrap;color:#fff;background:#6b7c94;box-shadow:0 2px 5px #20375220}.season-match-longest .match-longest-overview em.match-result-win{background:#178357}.season-match-longest .match-longest-overview em.match-result-loss{background:#c75326}
@media(max-width:1100px){.match-feature-foot{align-items:flex-start;flex-direction:column}.match-feature-stats{gap:6px}.match-feature-content{align-items:flex-start;flex-direction:column}.match-player-table-head,.match-player-row{grid-template-columns:minmax(0,1fr) 85px 40px 35px}}
`;
document.head.appendChild(matchHighlightStyle);
