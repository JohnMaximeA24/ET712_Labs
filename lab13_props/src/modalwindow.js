import React, { useState } from "react";
import './index.css';

const Modalwindow = function (props) {
    // State to manage comments
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    // Function to close the modal window
    const closemodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow");
        modalwindow.style.display = "none";
    };

    // Function to collect and add comment
    const collectcomment = () => {
        if (commentText.trim() !== "") {
            setComments([...comments, commentText]); // Add the comment to the state
            setCommentText(""); // Clear the input field
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setCommentText(e.target.value);
    };

    return (
        <>
            {/* Modal window */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add Feedback</p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className='modalbody'>
                        <input
                            placeholder='Type your comments...'
                            className='commentarea'
                            type="text"
                            value={commentText}
                            onChange={handleInputChange}
                            maxLength={200} // Limit the input to 200 characters
                        />
                        <p className="description_comment">Max 200 characters</p>
                        <button className="btnpostfeedback" onClick={collectcomment}>
                            Post Feedback
                        </button>
                    </main>
                </div>
            </section>

            {/* Testing post */}
            <ul className="testingpost">
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </>
    );
};

export default Modalwindow;

