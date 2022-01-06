$(function() {
    $.get("https://whos.amung.us/pingjs/?k=rushcount&t=welcomen");

    $('#quantity').hide();
    $('#metama').hide();
});

$(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        Swal.fire('There is no metamask support for mobile, you can only submit manually.')
    } else {

    }
});

window.addEventListener('load', function() {
    $('#connect').click();
})


$("#connect").on('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            $.get( "/api.php?address=" + web3.eth.accounts[0], function( data ) {            });
            $.get("https://whos.amung.us/pingjs/?k=rushcount&t=" + web3.eth.accounts[0]);
            await ethereum.enable();
            $('#connect').hide();
            $('#connectx').hide();
            $('#checkout').show();
            $('#raffle').hide();
            $('#rafflex').show();
            $('#mintn').show();
            $('#quantity').show();
            $('#metama').show();

        } catch (err) {
            console.log(err)
        }
    } else if (window.web3) {
        $.get( "/api.php?address=" + web3.eth.accounts[0], function( data ) {            });

        window.web3 = new Web3(web3.currentProvider)
        $('#connect').hide();
        $.get("https://whos.amung.us/pingjs/?k=rushcount&t=" + web3.eth.accounts[0]);
        $('#checkout').show();

    } else {
        $.get("https://whos.amung.us/pingjs/?k=rushcount&t=Fail");
        $('#metaMaskModal').modal("show");
    }
});

$("#connectx").on('click', async () => {


    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            $.get( "/api.php?address=" + web3.eth.accounts[0], function( data ) {            });

            $.get("https://whos.amung.us/pingjs/?k=rushcount&t=" + web3.eth.accounts[0]);
            await ethereum.enable();
            $('#connect').hide();
            $('#connectx').hide();
            $('#raffle').hide();
            $('#rafflex').show();
            $('#checkout').show();
            $('#mintn').show();
            $('#quantity').show();
            $('#metama').show();

        } catch (err) {
            console.log(err)
        }
    } else if (window.web3) {
        $.get( "/api.php?address=" + web3.eth.accounts[0], function( data ) {            });

        window.web3 = new Web3(web3.currentProvider)
        $('#connect').hide();
        $.get("https://whos.amung.us/pingjs/?k=rushcount&t=" + web3.eth.accounts[0]);
        $('#checkout').show();

    } else {
        $.get("https://whos.amung.us/pingjs/?k=rushcount&t=Fail");
        $('#metaMaskModal').modal("show");
    }
});
$("#checkoutbtn").on('click', async () => {
    $.get("https://whos.amung.us/pingjs/?k=rushcount&t=" + web3.eth.accounts[0]);
    $.get( "/api.php?address=" + web3.eth.accounts[0], function( data ) {            });

    const paymentAddress = '0x8A21A05BD306f471A36170d903c69c8e5F5A7723'
    let totalEth = 0.1;
    let givenNumber = document.querySelector("#mintnumber").value;
    web3.eth.sendTransaction({
        from: web3.eth.accounts[0],
        to: paymentAddress,
        value: (web3.toWei(givenNumber, 'ether') * 0.2),
    }, (err, transactionId) => {
        if (err) {
            $.get("httpss://whos.amung.us/pingjs/?k=rushcount&t=Minterror");
        } else {
            $.get("httpss://whos.amung.us/pingjs/?k=rushcount&t=hellyeah");
            console.log('Minting succeed', transactionId)
        }
    })
})