import React from "react";
import UserDefaultImg from "../../assets/img/user.jpg"
import { formatDate } from "../../utilities/utils";

const CommentList = ({ comments }) => {
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
					</h6>
					<p style={{ whiteSpace: "pre-line" }}>
						{ comment.content }
					</p>
					<button class="btn btn-sm btn-outline-secondary">Reply</button>

					{ comment.replies.map((reply) => (
						<div class="media mt-4">
							<img 
								src={reply.author.avatar} 
								alt="User Image" 
								className="img-fluid mr-3 mt-1"
								style={{ width: "45px" }}
							/>
							<div className="media-body">
								<h6><a href="">{ reply.author.username}</a> <small><i>{ formatDate(reply.createdAt) }</i></small></h6>
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
