const people = [
    {
        name: "Adam Levine",
        job: "Singer",
        img: "assets/img/review-people/1.jpg",
        review: "elit. Omnis modi dolor similique totam nostrum optio fugiat voluptate obcaecati quae explicabo aspernatur aliquam molestiae et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
    {
        name: "Drew Barrymore",
        job: "Writer at TOI",
        img: "assets/img/review-people/2.jpg",
        review: "Lorem ipsum dolor sibus, quo magni! Debitis placeat temporibus est atque natus autem nesciunt corrupti modi dolorem eius enim possimus sequi, dicta optio qui accusantium."
    },
    {
        name: "Charley Shills",
        job: "Professional Dancer",
        img: "assets/img/review-people/3.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisici et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
    {
        name: "Maitri Nair",
        job: "Artist",
        img: "assets/img/review-people/4.jpg",
        review: "Lorem ipsu consectetur adipisicing elit. Omnis modi dolor similique totam nostrum optio fugiat voluptate obcaecati quae explicabo aspernatur aliquam molestiae et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
    {
        name: "Dan Craig",
        job: "Member",
        img: "assets/img/review-people/5.jpg",
        review: "Lorem ipsum dolor sit am elit. Omnis modi dolor similique totam nostrum optio fugiat voluptate obcaecati quae explicabo aspernatur aliquam molestiae et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
    {
        name: "Cristina Grimme",
        job: "Politician",
        img: "assets/img/review-people/6.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi dolor similique totam nostrum optio fugiat voluptate obcaecati quae explicabo aspernatur aliquam molestiae et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
    {
        name: "Sando Lucaz",
        job: "Theatre Actor",
        img: "assets/img/review-people/7.jpg",
        review: "Lorem ipsum dolor sitis modi dolor similique totam nostrum optio fugiat voluptate obcaecati quae explicabo aspernatur aliquam molestiae et commodi necessitatibus, libero sit consequatur perspiciatis?",
    },
];

let currReview = 0;
const numReviews = people.length;

const currImg = document.getElementById("person-img");
const currName = document.getElementById("name");
const currJob = document.getElementById("job");
const currText = document.getElementById("review-text");

// Load the first person when page loads.
window.addEventListener("DOMContentLoaded", changeReview);

const leftArrow = document.querySelector(".l-arrow svg");
const rightArrow = document.querySelector(".r-arrow svg");
console.log(leftArrow)


leftArrow.addEventListener("click", function(){
    currReview--;
    changeReview();
});
rightArrow.addEventListener("click", function(){
    currReview++;
    changeReview();
});


function changeReview(){

    if (currReview >= numReviews) currReview = 0;
    if (currReview < 0) currReview = numReviews - 1;

    // -1: prev, 0: curr, 1: next
    let person = people[currReview];

    // Change the values in DOM
    currImg.src = person.img;
    currName.textContent = person.name;
    currJob.textContent = person.job;
    currText.textContent = person.review;
}
