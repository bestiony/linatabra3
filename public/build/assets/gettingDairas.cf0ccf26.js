const e=document.getElementById("dairaSelect"),o=document.getElementById("wilayaSelect"),[r]=document.getElementsByTagName("html"),i=r.getAttribute("lang"),s=()=>{var t=new XMLHttpRequest;t.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var l=JSON.parse(this.responseText);i==="ar"?e.innerHTML='<option selected hidden style="display:none" value="">\u0627\u0644\u062F\u0627\u0626\u0631\u0629</option>':i==="fr"&&(e.innerHTML='<option selected hidden style="display:none" value="">Daira</option>'),l.forEach(a=>{const n=document.createElement("option");n.value=a.id,n.text=i==="ar"?a.arName:a.name,e.add(n),e.removeAttribute("disabled")})}};var d=o.value;t.open("GET","/api/dairas/"+d,!0),t.send()};o.value&&s();o.addEventListener("change",s);
