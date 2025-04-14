import React from "react";
import UserDefaultImg from "../../assets/img/user.jpg"
import { formatDate } from "../../utilities/utils";
import { useState } from "react";
import { createComment } from "../../services/commentService";
import { toast } from 'react-toastify';
import { useAuth } from "../../hooks/useAuth";

const CommentList = ({ comments, newsId, refetch }) => {
	const { user } = useAuth();
	const [replyContent, setReplyContent] = useState("");
	const [replyTo, setReplyTo] = useState("");

	const onReply = async (e) => {
		e.preventDefault();

		try {
            const result = await createComment({
				newsId,
				content: replyContent,
				replyTo
			});
            if (result) {
                toast.success(result.message);
				setReplyTo("");
				setReplyContent("");
				refetch();
            }
        } catch (error) {   
            console.log(error);
        }
	}

	return (
		<div className="bg-light mb-3" style={{ padding: "30px" }}>
		<h3 className="mb-4">{ comments.length } comments</h3>

		{/* Comment 1 */}
		{ comments.map((comment) => (
			<div key={comment._id}>
				<div className="media mb-4">
					<img
						src={comment.author.avatar ?? UserDefaultImg}
						alt="User Image"
						className="img-fluid mr-3 mt-1"
						style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%"}}
					/>
					<div className="media-body">
					<h6>
						<a href="">{ comment.author.username }</a> <small><i>{ formatDate(comment.createdAt) }</i></small>
						{
							user._id === comment.author._id && 
							<>
								<i className="fa fa-pen cursor-pointer ml-3"></i>
								<i className="fa fa-trash cursor-pointer ml-3"></i>
							</>
						}
					</h6>
					<p style={{ whiteSpace: "pre-line" }}>
						{ comment.content }
					</p>
					<button class="btn btn-sm btn-outline-secondary" onClick={() => setReplyTo(replyTo !== comment._id ? comment._id : "")}>Reply</button>
					{ replyTo === comment._id && <>
						<div className="form-group mt-3">
							<textarea id="message" className="form-control" placeholder="Aa.." rows="2" onChange={(e) => setReplyContent(e.target.value)}></textarea>
						</div>
						<div className="form-group mb-0">
							<button className="btn btn-primary font-weight-semi-bold py-2 px-3" onClick={onReply}>
								Submit
							</button>
						</div>
					</>}
					{ comment.replies.map((reply) => (
						<div class="media mt-4">
							<img 
								src={reply.author.avatar} 
								alt="User Image" 
								className="img-fluid mr-3 mt-1"
								style={{ width: "45px" }}
							/>
							<div className="media-body">
								<h6>
									<a href="">{ reply.author.username}</a> 
									<small className="ml-2"><i>{ formatDate(reply.createdAt) }</i></small>
									{
										user._id === reply.author._id && 
											<>
												<i className="fa fa-pen cursor-pointer ml-3"></i>
												<i className="fa fa-trash cursor-pointer ml-3"></i>
											</>
									}
								</h6>
								<p style={{ whiteSpace: "pre-line" }}>{ reply.content }</p>
							</div>
						</div>
					))}
					</div>
				</div>
			</div>
		))}
		</div>
	);
};

export default CommentList;
