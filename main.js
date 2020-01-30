
const printToDom = (divId, textToPrint) => { 
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addForm = () => {
    let domString = '';
    domString += `<form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="staticEmail2" class="sr-only">Student:</label>
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student:">
                    </div>
                        <div class="form-group mx-sm-3 mb-2">
                        <label for="inputName" class="sr-only">Name</label>
                        <input type="name" class="form-control" id="inputName" placeholder="Neville Longbottom">
                    </div>
                        <button id='sort' type="submit" class="btn btn-primary mb-2">Sort!</button>
                    </form>`
  printToDom('form', domString);
};

const addStudent = () => {
    let domString = '';
    domString += `  <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Winky Abbot</h5>
                            <p class="card-text">shuffle(schools)</p>
                            <a href="#" class="btn btn-primary">Expel</a>
                        </div>
                    </div>`
    printToDom('card', domString);
};

const events = () => {
    document.getElementById('begin').addEventListener('click', addForm);
    document.getElementById('sort').addEventListener('click', addStudent);
};

const init = () => {
    events();
}

init();