import React, { useEffect, useState } from 'react'
import Tags from '../../components/pages/Tags';
import { useNavigate } from 'react-router-dom';
import { getNewsCategory } from '../../services/newsService';
import TechnologyCategoryImage from "../../assets/img/cat-500x80-2.jpg";
import BusinessCategoryImage from "../../assets/img/news-700x435-1.jpg";
import EntertainmentCategoryImage from "../../assets/img/cat-500x80-3.jpg";
import SportsCategoryImage from "../../assets/img/cat-500x80-4.jpg";
import CorporateCategoryImage from "../../assets/img/news-500x280-5.jpg";
import EducationCategoryImage from "../../assets/img/news-500x280-4.jpg";
import HealthCategoryImage from "../../assets/img/news-500x280-6.jpg";
import LifeStyleCategoryImage from "../../assets/img/news-500x280-2.jpg";
import TravelCategoryImage from "../../assets/img/news-500x280-3.jpg";
import PoliticsCategoryImage from "../../assets/img/news-500x280-1.jpg";
import ScienceCategoryImage from "../../assets/img/news-300x300-2.jpg";
import FoodCategoryImage from "../../assets/img/news-500x280-1.jpg";

const CategoryList = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const getCategoryImage = (category) => {
        switch (category) {
            case "technology":
                return TechnologyCategoryImage;
            case "business":
                return BusinessCategoryImage;
            case "entertainment":
                return EntertainmentCategoryImage;
            case "sports":
                return SportsCategoryImage;
            case "corporate":
                return CorporateCategoryImage;
            case "education":
                return EducationCategoryImage;
            case "health":
                return HealthCategoryImage;
            case "lifestyle":
                return LifeStyleCategoryImage;
            case "travel":
                return TravelCategoryImage;
            case "politics":
                return PoliticsCategoryImage;
            case "science":
                return ScienceCategoryImage;
            case "foods":
                return FoodCategoryImage;
            
        }
    }

	const fetchNewsCategory = async () => {
        const response = await getNewsCategory();
        const categories = response.data;
        setCategories(categories);
    }
	useEffect(() => {
        fetchNewsCategory();
    }, []);

  	return (
    	<div id="category">
      		<div class="container-fluid">
        		<div class="container">
					<nav class="breadcrumb bg-transparent m-0 p-0">
						<a class="breadcrumb-item" href="#">Home</a>
						<a class="breadcrumb-item" href="#">Category</a>
						<span class="breadcrumb-item text-capitalize active">List</span>
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
										<h3 class="m-0 text-capitalize">List category</h3>
									</div>
								</div>
								{ categories.map((category) => (
									<div class="col-lg-12" key={category}>
                                        <div class="position-relative overflow-hidden mb-3" style={{ height: "80px" }} onClick={() => navigate(`/category/${category}`)}>
                                            <img class="img-fluid w-100 h-100" src={getCategoryImage(category)} style={{ objectFit: "cover" }} />
                                            <a href="" class="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none text-capitalize">
                                                { category }
                                            </a>
                                        </div>
									</div>
								))}
							</div>
						</div>
						<Tags />
					</div>
				</div>
			</div>
		</div>
  	)
}

export default CategoryList