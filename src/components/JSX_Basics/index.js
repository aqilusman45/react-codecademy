import React from 'react';

//Jsx can be stored in a variable, array, objects and can be  passed in a functions.

//EXAMPLES

//JSX stored in a constant
const someJsx = <h2>JSX in a Variable</h2>;

//JSX stored in an Array

const listJsx = [<a href="google.com">Grapes</a>,
<a href="google.com">Apples</a>,
<a href="google.com">Bananas</a>,
<a href="google.com">PineApple</a>,
<a href="google.com">Black Berries</a>,
<a href="google.com">Blue Berries</a>,
<a href="google.com">Apricot</a>,
<a href="google.com">Avacado</a>];

//JSX stored in an object

const userProf = {
    username: 'aqilusman45',
    photo: 'data:image/jpeg;base64,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',
    name: 'Usman Aqil',
    description: 'Hello World',
    gitHub: 'https://github.com/aqilusman45',
}

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

const photoHeight = "100px";


//This Wont Work as Target is not Defined
//  function eventListenerEx(e){
//     if (e.target.alt === 'Kitty') {
//     e.target.setAttribute('src','https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg' );
//     e.target.setAttribute('alt', 'Doggy');
//     } else {
//         e.target.setAttribute('src','https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg' );
//         e.target.setAttribute('alt', 'Kitty');
//     }

//     alert('Event Triggered');
// }

// React Component Classes
export class JsxBasics extends React.Component {

    eventListenerEx(e) {
        if (e.target.alt === 'Kitty') {
            e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
            e.target.setAttribute('alt', 'Doggy');
        } else {
            e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg');
            e.target.setAttribute('alt', 'Kitty');
        }

        alert('Event Triggered');
    }


    render() {
        const friend = friends[1];
        let randomRender = Math.random() > 0.5;
        //Render Method Returns JSX which is transpiled in to HTML
        //Some Rules While Writing JSX
        //JSX must always be wrapped in a parent container (generally Div)
        // Multi level/line jsx must be returned within Parenthesis
        //Do not Use reserved Js keywords in Jsx 
        //Self closing tags must have a forward slash </>
        //To render JS inside JSX we must wrap it with paranthesis as shown below
        //We can call functions, methods arrays, objects within these parathesis
        //variables can be called in attributes
        //eventListeners 
        return (
            <div>
                <h1>Hello World!</h1>
                {someJsx}
                <ul>
                    <p>List in an array mapped inside ul</p>
                    {
                        listJsx.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <div className="User_Info">
                    <img alt='profile' src={userProf.photo} height={photoHeight} />
                    <b />
                    <p>{userProf.name}</p>
                    <b />
                    <a href={userProf.gitHub}>GitHub Link</a>
                    <b />
                    <p>{userProf.username}</p>
                    <b />
                    <p>{userProf.description}</p>
                    <p className="Random_Number">{Math.PI}</p>
                    <h4 className="Maths_Op">{8 + 3}</h4>
                </div>
                <div className="Conditional_Rendering">
                    <p>{friend.title}</p>
                    <img alt='hi' width='500px' src={friend.src} />
                </div>

                {
                    (!randomRender) ? <p>Random Rendered</p> : <p></p>
                }


                <div>
                    <h1>Advanced JSX</h1>

                    <h2>Event Listeners</h2>
                    <div>
                        <img alt="Kitty" width="500px" src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" onClick={this.eventListenerEx} />
                    </div>
                </div>
            </div>
        )
    }
}