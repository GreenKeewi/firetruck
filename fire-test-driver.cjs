const E=require('./engine3d');
function aimInput(g){const f=g.job.fires?.find(f=>f.heat>0);if(!f)return{brake:true};const c=g.car,x=c.x+Math.cos(c.a)*c.length*.35,z=c.y+Math.sin(c.a)*c.length*.35,d=Math.hypot(f.x-x,f.z-z),yaw=E.angleDiff(Math.atan2(f.z-z,f.x-x),c.a),pitch=Math.atan2(f.height-(c.height||0)-39+49*(d/400)**2,d),ye=E.angleDiff(yaw,g.cannon.yaw),pe=pitch-g.cannon.pitch;return{brake:true,cannon:{left:ye<-.007,right:ye>.007,up:pe>.006,down:pe<-.006,spray:Math.abs(ye)<.04&&Math.abs(pe)<.03}};}
function operate(g,limit=90){if(!g.toggleCannon())return false;for(let i=0;i<limit*120&&g.job.stage==='fire';i++)g.update(1/120,aimInput(g));return g.job.stage==='standby';}
module.exports={aimInput,operate};
