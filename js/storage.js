const STORAGE_KEY = 'rizaFinanceCommandV2';
const defaultFinanceData = {
  settings:{userName:'Riza',baseCurrency:'AED',financialMonthStart:27},
  accounts:[],transactions:[],budgets:[],cards:[],loans:[],bills:[],goals:[]
};
function loadData(){return JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(defaultFinanceData)}
function saveData(){localStorage.setItem(STORAGE_KEY, JSON.stringify(appData))}
function exportFinanceData(){const blob=new Blob([JSON.stringify(appData,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`personal-finance-backup-${new Date().toISOString().slice(0,10)}.json`;a.click()}
function importFinanceData(file){const reader=new FileReader();reader.onload=e=>{try{appData=JSON.parse(e.target.result);saveData();renderAll();alert('Backup imported successfully')}catch{alert('Invalid backup file')}};reader.readAsText(file)}
