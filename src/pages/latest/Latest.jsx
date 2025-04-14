import React, { useEffect, useState } from 'react'
import Tags from '../../components/pages/Tags';
import News from '../../components/pages/News';
import BriefNews from '../../components/pages/BriefNews';
import Paginator from '../../components/paginator/Paginator';
import { getLatestNews } from '../../services/newsService';
import { useParams } from 'react-router-dom';

const Latest = () => {
	const [newsList, setNewsList] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	
	const fetchNews = async () => {
		try {
            const response = await getLatestNews({
				page,
				pageSize: 10
			});
            const fetchedUserNews = response.data;
			setTotalPages(response.totalPages);
            setNewsList(fetchedUserNews)
        } catch (error) {   
            console.log(error);
        }
	}

	useEffect(() => {
		fetchNews();
	}, [page ]);

  	return (
    	<div id="category">
      		<div class="container-fluid">
        		<div class="container">
					<nav class="breadcrumb bg-transparent m-0 p-0">
						<a class="breadcrumb-item" href="#">Home</a>
						<a class="breadcrumb-item" href="#">News</a>
						<span class="breadcrumb-item text-capitalize active">Latest</span>
					</nav>
				</div>
			</div>

			<div class="container-fluid py-3">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="row">
								<div class="col-12">
									<div class="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
										<h3 class="m-0 text-capitalize">Latest news</h3>
									</div>
								</div>
								{ newsList.slice(0, 4).map((news) => (
									<div class="col-lg-6" key={news._id}>
										<News news={news}/>
									</div>
								))}
							</div>
							<div className="row">
								{ newsList.slice(4, newsList.length).map((news) => (
									<div class="col-lg-6" key={news._id}>
										<BriefNews news={news}/>
									</div>
								))}
							</div>

							<div class="row">
								<div class="col-12">
									<Paginator currentPage={page} setCurrentPage={setPage} totalPages={totalPages}/>
								</div>
							</div>
						</div>
						<Tags />
					</div>
				</div>
			</div>
		</div>
  	)
}

export default Latest