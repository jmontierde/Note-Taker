const btnEl = document.getElementById('btnNote');
const containerEl = document.querySelector('.newContainer');
const inputEl = document.getElementById('inputNote').value;

let counter = 1;
let currentCounter;


// counter
 // counter ++ 
// counter ++ 






btnEl.addEventListener('click', (e) =>{
      e.preventDefault();


      const noteCounter = document.createElement('div');
      noteCounter.classList.add('note-counter');
      containerEl.appendChild(noteCounter);
      
      const note = document.createElement('h3');
      note.classList.add('note');
      note.innerText = "Note " + counter; 
      noteCounter.appendChild(note);
      console.log(counter++);

      

      


      const inputEl = document.getElementById('inputNote').value;
      let noteParagraph = document.createElement('p');
      noteParagraph.classList.add('note-paragraph')
      noteParagraph.innerText = inputEl;
      noteCounter.appendChild(noteParagraph);


      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-container');
      noteCounter.appendChild(btnContainer);

      const viewBtn = document.createElement('button');
      viewBtn.classList.add('viewBtn');
      viewBtn.innerText = "View Note"
      btnContainer.appendChild(viewBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerText = "Delete";
      btnContainer.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', (id) =>{
            containerEl.removeChild(noteCounter);
            console.log(counter--);

        
      })

 
   
      const modalContainer = document.querySelector('.modal-container');

      viewBtn.addEventListener('click', () =>{
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modalContainer.appendChild(modal);
      
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      modal.appendChild(iconContainer);

      const modalIcon = document.createElement('i');
      modalIcon.classList.add('fa-solid', 'fa-x');
      iconContainer.appendChild(modalIcon);

   
      modalIcon.addEventListener('click', () =>{
            modalContainer.removeChild(modal);
      })


      const containerParagraph = document.createElement('div');
      containerParagraph.classList.add('container-paragraph');
      modal.appendChild(containerParagraph);

      const modalParagraph = document.createElement('p');
      modalParagraph.classList.add('modal-paragraph');
      containerParagraph.appendChild(modalParagraph);
      modalParagraph.textContent += noteParagraph.textContent;

});

      
});


