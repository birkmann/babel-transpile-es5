const getPost = async function () {
  let userResp = await fetch('https://jsonplaceholder.typicode.com/users/1')
  let user = await userResp.json()

  //console.log(user)

  document.querySelector('.user-name').innerHTML = user.name
  document.querySelector('.user-street').innerHTML = user.address.street
  document.querySelector('.user-suite').innerHTML = user.address.suite
  document.querySelector('.user-city').innerHTML = user.address.city
  document.querySelector('.user-zip').innerHTML = user.address.zipcode

  document.querySelector('.user-phone').innerHTML = user.phone
  document.querySelector('.user-username').innerHTML = user.username
  document.querySelector('.user-website').innerHTML = user.website

  document.querySelector('.user-company-name').innerHTML = user.company.name
  document.querySelector('.user-company-phrase').innerHTML = user.company.phrase
  document.querySelector('.user-company-bs').innerHTML = user.company.bs

  let commentsResp = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  )
  let comments = await commentsResp.json()

  let list = document.createElement('ul')

  comments.forEach(function (comment) {
    var li = document.createElement('li')
    //li.textContent = comment.title
    li.innerHTML += '<h2>' + comment.title + '</h2> <p>' + comment.body + '</p>'
    list.appendChild(li)
  })
  var commentsDiv = document.querySelector('.comments')
  commentsDiv.appendChild(list)
}

getPost()
