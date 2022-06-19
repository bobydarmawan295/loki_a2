window.onload=function(){
    document.getElementById("download")
    .addEventListener("click",()=>{
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.25,
                filename: 'rps.pdf',
                image: { type: 'jpeg', quality: 3 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: 'tabloid', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
    })
}
