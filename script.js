function generate(){
    const reference = document.getElementsByClassName('reference');
    let output = "";
    var count = 1;
    for(var j = 0; j < reference.length; j++){
        const inputs = reference[j].getElementsByTagName('input');
        output += "[" + count + "]";
        for (var i = 0; i < inputs.length; i++){
            if (inputs[i].value !== ""){
                if (inputs[i].className === "page"){
                    output += `"` + inputs[i].value + `". `;
                }
                else if(inputs[i].className === "access") {
                    output += "(参照 " + inputs[i].value + "). ";
                }
                else if(inputs[i].className === "url") {
                    output += inputs[i].value + ", ";
                }
                else {
                    output += inputs[i].value + ". ";
                }
            }
        }
        output += "\n";
        count++;
    }
    document.getElementById('output').innerHTML = output;   
}

function addReference(){
    const reference = document.getElementsByClassName('reference')[0];
    const newReference = reference.cloneNode(true);
    const title = newReference.getElementsByTagName('h2')[0];
    title.innerHTML = "参考文献" + (reference.parentNode.childElementCount + 1);
    newReference.id = "reference" + (reference.parentNode.childElementCount + 1);
    const inputs = newReference.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++){
        if(inputs[i].className !== "access")
            inputs[i].value = "";
    }
    reference.parentNode.appendChild(newReference);
}

function deleteReference(){
    const reference = document.getElementsByClassName('reference');
    if (reference.length > 1){
        reference[reference.length - 1].remove();
    }
    else{
        alert("これ以上削除できません");
    }
}

function copy(){
    const text = document.getElementById('output').value;
    navigator.clipboard.writeText(text).then(function(){
        alert('コピーしました');
    }, function(){
        alert('コピーできませんでした');
    });
}

function today() {
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    document.getElementsByClassName("access")[0].value=yyyy+'-'+mm+'-'+dd;
}

today();