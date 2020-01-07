//1. Write an event listener for the comment form that adds a comment to the comment list
const cForm = document.getElementById('comment-form')
const formBox = document.getElementById('comment-input')
const commentsList = document.getElementById('comments-list')
const ingredientsList = document.querySelector('.ingredients')

cForm.addEventListener('submit', event => {
  const formData = new FormData(cForm)
  event.preventDefault()
  submitComment(formData)
})

function submitComment(formData){
  const comment = document.createElement('li')
  comment.innerText = formData.get('comment')
  commentsList.appendChild(comment)
}
//2. Use FormData() to add comment to comment list

//3. Add a delete button to each comment that removes comment when clicked

//4. Non-event delegation: Add a click event listener to each list item

//5. Event delegation: Add a click event listener to list
ingredientsList.addEventListener('click', logIngredient)

function logIngredient(event){
  console.log(event.target.innerText)
}
