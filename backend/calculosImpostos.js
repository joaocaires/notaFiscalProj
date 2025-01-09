function calculoImpostos(){
    let valVenda = parseFloat(document.getElementById('valVenda').value)
    let valIrpf = parseFloat(document.getElementById('valIrpf').value)
    let valPis = parseFloat(document.getElementById('valPis').value)
    let valCofins = parseFloat(document.getElementById('valCofins').value)
    let valInss = parseFloat(document.getElementById('valInss').value)
    let valIssqn = parseFloat(document.getElementById('valIssqn').value)

    let somaDosImpostos = valIrpf + valPis + valCofins + valInss + valIssqn
    return valVenda + (valVenda * somaDosImpostos / 100)
}

let button = document.getElementById('btnGeracaoNota')
button.addEventListener('click', () => {
    alert("Nota Fiscal Gerada !!! Desça a tela para ver o resultado !")
    
    let valItens = document.getElementById('valItens').value
    document.getElementById('exibicaoItens').innerHTML = valItens

    let valVenda = document.getElementById('valVenda').value
    document.getElementById('exibicaoValVenda').innerHTML = valVenda

    let valIrpf = document.getElementById('valIrpf').value
    document.getElementById('exibicaoIrpf').innerHTML = valIrpf

    let valPis = document.getElementById('valPis').value
    document.getElementById('exibicaoPis').innerHTML = valPis

    let valCofins = document.getElementById('valCofins').value
    document.getElementById('exibicaoCofins').innerHTML = valCofins

    let valInss = document.getElementById('valInss').value
    document.getElementById('exibicaoInss').innerHTML = valInss

    let exibicaoValTotal = document.getElementById('exibicaoValTotal').value
    document.getElementById('exibicaoValTotal').innerHTML = calculoImpostos()
});

