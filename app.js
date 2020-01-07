//1. Write an event listener for the comment form that adds a comment to the comment list
const cForm = document.getElementById('comment-form')
const formBox = document.getElementById('comment-input')
const commentsList = document.getElementById('comments-list')

cForm.addEventListener('submit', event => {
  event.preventDefault()
  submitComment()
})

function submitComment(){
  const commentLi = document.createElement('li')
  commentLi.innerText = formBox.value
  commentsList.appendChild(commentLi)
}
//2. Use FormData() to add comment to comment list

//3. Add a delete button to each comment that removes comment when clicked

//4. Non-event delegation: Add a click event listener to each list item

//5. Event delegation: Add a click event listener to list
