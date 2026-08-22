function downloadVCF() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Sutar;Vikas;;;
FN:Vikas Sutar
ORG:Vishwakarma Jewellers
TITLE:Proprietor
TEL;TYPE=CELL:+919022650723
ADR;TYPE=WORK:;;Hebbal Kasaba Nool;Gadhinglaj;Kolhapur;Maharashtra;;India
NOTE:Vishwakarma Jewellers - Gold & Silver Ornaments Maker
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'Vikas_Sutar_Vishwakarma_Jewellers.vcf';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
