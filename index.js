
//vanilla javascript
// const rootRendering = document.querySelector("#root");

// const div = document.createElement("div");

// const h2 = document.createElement("h2");
// h2.innerText = "hii am h2";

// const p = document.createElement("p");
// p.innerText = " its p";
   
// div.append(h2,p);
// rootRendering.append(div);


//react implimentataion


// console.log(React)
// console.log(ReactDOM)
// const root = document.getElementById("root");
// // const p = React.createElement("p" , {} ,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam quos necessitatibus nobis, delectus vel quis quaerat sunt reiciendis dolor. Vero ratione architecto iste aspernatur doloremque voluptates quisquam corrupti nihil.   Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam quos necessitatibus nobis, delectus vel quis quaerat sunt reiciendis dolor. Vero ratione architecto iste aspernatur doloremque voluptates quisquam corrupti nihil." );
// const p = React.createElement('p', {}, 'Hello I am Paragraph - React')
// const h1 = React.createElement("h1" , {} , "Learn Web devlopment");
// const a  = React.createElement('a',  {href :" "} , 'follow me');
// const p1 = React.createElement('p', {}, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facere illum illo quae. Delectus maiores, minima eaque commodi, dolorum sapiente ratione minus, mollitia natus expedita enim doloribus. Ipsa, sunt exercitationem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facere illum illo quae. Delectus maiores, minima' , a , ' eaque commodi, dolorum sapiente ratione minus, mollitia natus expedita enim doloribus. Ipsa, sunt exercitationem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facere illum illo quae. Delectus maiores, minima eaque commodi, dolorum sapiente ratione minus, mollitia natus expedita enim doloribus. Ipsa, sunt exercitationem.',a , 'asafsfhgjk');
// const div = React.createElement("div" , {} , p1); 
// ReactDOM.render(div , root);
// //const p = React.createElement('p', {}, 'Hello I am Paragraph - React')



// const flexDivStyle = {
//     display : 'flex',
//     alignItems : 'center',
//     justifyContent: 'center',
//     height : '100vh'
// }

// const flexDiv = React.createElement("div", {
//     style : flexDivStyle
// }, div)

//project Start

const divStyle = {
    margin : "100px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "column"
};
const root =  document.querySelector("#root");

const a = React.createElement("a" , {href : "www.google.com" , style : {
    color : 'blue',
    textDecoration : "none"
}} , "learn more about the webddevelopment...");

const h1 = React.createElement("h1" , {} , "Learn web Development");

const  p2 = React.createElement("p" , {style:{
    fontSize : "25px",
    lineHeight  :"2rem",
    textAlign : "justify"
}} , "For larger organizations and businesses, ", a , " Web development teams can consist of hundreds of people (Web developers) and follow standard methods like Agile methodologies while developing Web sites.Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers. Since the commercialization of the Web, the industry has boomed and has become one of the most used technologies ever.",);

const  p = React.createElement("p" , {style:{
    fontSize : "25px",
    lineHeight  :"2rem",
    textAlign : "justify"
}} , p2 , "For larger organizations and businesses, Web development teams can consist of hundreds of people (Web developers) and follow standard methods like Agile methodologies while developing Web sites.Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers.Since the commercialization of the Web, the industry has boomed and has become one of the most used technologies ever.");

const div = React.createElement("div" ,{style : divStyle} , [h1 , p]);
//ui 
ReactDOM.render(div , root);



