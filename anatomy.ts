export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'骨骼系統',color:'#e2d9ba',description:'骨骼構成身體的支撐架構、保護器官，並提供肌肉附著點。骨組織也能儲存礦物質並製造血球。'},
 {id:'muscular',name:'肌肉系統',color:'#a85b50',description:'骨骼肌藉由牽拉附著處產生動作；它們與肌腱共同活動關節、穩定姿勢並產生熱能。'},
 {id:'cardiac',name:'心臟',color:'#b96760',description:'心臟是由四個腔室構成的肌肉幫浦；瓣膜使血液向前流經肺循環與全身循環。'},
 {id:'sensory',name:'感覺器官',color:'#b0c8ce',description:'這些構造參與視覺、聽覺與平衡等特殊感覺；其專門組織偵測刺激，並與神經系統合作傳遞資訊。'},
 {id:'arterial',name:'動脈系統',color:'#c05245',description:'心臟驅動血液循環。動脈將血液由心臟送往組織；在肺循環中則將血液送往肺部。'},
 {id:'venous',name:'靜脈系統',color:'#527c9f',description:'靜脈將血液帶回心臟；淺層與深層網絡收集組織血液，而肺靜脈將含氧血帶回心臟。'},
 {id:'nervous',name:'神經系統',color:'#d8b565',description:'大腦、脊髓與周邊神經負責傳遞及處理訊號，支援感覺、動作、協調與身體功能的自動調節。'},
 {id:'respiratory',name:'呼吸系統',color:'#b98991',description:'呼吸道將空氣導入肺部，氧氣與二氧化碳在此與血液交換；呼吸仰賴呼吸肌造成的壓力變化。'},
 {id:'digestive',name:'消化系統',color:'#b8916b',description:'消化道分解食物、吸收養分與水分，並將廢物向前推送；附屬器官提供膽汁與消化酶。'},
 {id:'urinary',name:'泌尿系統',color:'#b47961',description:'腎臟過濾血液並調節體液、電解質與酸鹼平衡。尿液經輸尿管進入膀胱，再由尿道排出。'},
 {id:'lymphatic',name:'淋巴系統',color:'#879f7c',description:'淋巴管將多餘組織液送回循環；淋巴結與其他淋巴器官支援免疫監視和反應。'},
 {id:'endocrine',name:'內分泌系統',color:'#c5a09a',description:'內分泌器官將荷爾蒙釋入血液，協調代謝、生長、壓力反應與生殖等過程。'},
 {id:'reproductive',name:'生殖系統',color:'#bda098',description:'此模型呈現的男性生殖構造參與精子生成、成熟與運輸，以及性荷爾蒙的分泌。'},
 {id:'integumentary',name:'體表',color:'#ba9b7d',description:'體表提供外部解剖參考；外皮系統形成保護屏障，並參與感覺和體溫調節。'},
 {id:'connective',name:'結締組織',color:'#aec3bb',description:'軟骨、韌帶與其他結締組織支撐、連接並分隔構造，協助穩定關節與分散機械負荷。'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'位於胸腔的肌肉幫浦。右側將血液送往肺部，左側則將血液送入全身循環。',
 'liver':'位於橫膈右側下方的大型器官，負責處理吸收的養分、製造膽汁及合成多種血液蛋白質。',
 'brain':'神經系統的中樞器官；彼此連結的區域支援感知、動作、記憶、語言與身體功能調節。',
 'stomach':'位於食道與小腸間的肌肉囊腔，暫存食物並與胃酸、酵素混合後釋入十二指腸。',
 'spleen':'位於左上腹的淋巴器官，能過濾血液、清除老化血球並參與免疫反應。',
 'pancreas':'兼具消化與內分泌功能的腹部器官；它向小腸提供酵素，並釋放胰島素、升糖素等荷爾蒙。',
 'urinary bladder':'骨盆中的肌肉囊腔，儲存由腎臟經輸尿管送來的尿液。',
 'trachea':'連接喉部與支氣管的主要呼吸道；軟骨支架使呼吸時氣道保持暢通。',
 'diaphragm':'分隔胸腔與腹腔的寬大肌肉；收縮時可增加胸腔容積，協助空氣進入肺部。',
};
const CHINESE_NAMES:Record<string,string>={heart:'心臟',brain:'大腦',liver:'肝臟',stomach:'胃',spleen:'脾臟',pancreas:'胰臟','urinary bladder':'膀胱',trachea:'氣管',diaphragm:'橫膈膜',lung:'肺',lungs:'肺',kidney:'腎臟',kidneys:'腎臟',esophagus:'食道',small intestine:'小腸',large intestine:'大腸',colon:'結腸',rectum:'直腸',thyroid:'甲狀腺',adrenal gland:'腎上腺',pituitary gland:'腦下垂體',spinal cord:'脊髓',femur:'股骨',tibia:'脛骨',fibula:'腓骨',humerus:'肱骨',radius:'橈骨',ulna:'尺骨',scapula:'肩胛骨',clavicle:'鎖骨',sternum:'胸骨',pelvis:'骨盆',skull:'顱骨',mandible:'下顎骨',eye:'眼睛',ear:'耳朵',tongue:'舌頭',skin:'皮膚'};
export function localizedName(name:string){return CHINESE_NAMES[name.toLowerCase()]??name;}
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
