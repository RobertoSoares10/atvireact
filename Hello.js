import './Emoji.css';

function Hello (){

    function anjo(){
        var anjo = document.getElementById("click3").title;
        document.getElementById("evento").innerHTML = anjo;
    }

    function dancarina(){
        var dancarina = document.getElementById("click1").title;
        document.getElementById("evento").innerHTML = dancarina;
    }

    function fogo(){
        var fogo = document.getElementById("click2").title;
        document.getElementById("evento").innerHTML = fogo;
    }

    return(
        <div>
            <button ><img class="clicar" title="dancarina" id="click1" onClick={dancarina} src="https://images.emojiterra.com/google/android-oreo/512px/1f483.png"></img></button>
            <button ><img class="clicar" title="fogo" id="click2" onClick = {fogo} src="https://images.emojiterra.com/google/android-11/512px/1f525.png"></img></button>
            <button ><img class="clicar" title="anjo"  id="click3" onClick={anjo} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW8OzFx6K7IlmtVHtBFNWaBxmEYlecGMwGA&usqp=CAU"></img></button>
            <p id="evento"></p>
        </div>
        )

}

export default Hello;