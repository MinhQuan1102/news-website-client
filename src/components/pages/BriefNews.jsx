import React from 'react'
import { formatDate } from '../../utilities/utils'
import { useNavigate } from 'react-router-dom';

const BriefNews = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div class="d-flex mb-3" onClick={() => navigate(`/news/detail/${news._id}`)}>
        <img src={news?.thumbnail} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
        <div class="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: "100px" }}>
            <div class="mb-1" style={{ fontSize: "13px" }}>
                <a href="" className="text-capitalize">{ news?.category }</a>
                <span class="px-1">/</span>
                <span>{ formatDate(news.createdAt) }</span>
            </div>
            <a class="h6 m-0" href="">{ news?.title }</a>
        </div>
    </div>
  )
}

export default BriefNews