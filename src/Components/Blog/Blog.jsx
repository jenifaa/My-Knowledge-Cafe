
import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";



const Blog = ({blog, handleBookmark,handleReadingTime}) => {
    const {title, cover,author,posted_date, author_img, reading_time,hashtag} = blog;
    return (
        <div className='mb-20'>
           <div> <img className='rounded-xl w-full mb-5' src={cover} alt="" /></div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                   <div>
                    <p>{author}</p>
                    <p>{posted_date}</p>
                   </div>

                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmark(blog)} className='text-xl'><CiBookmark /></button>

                </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>

            <p className='mb-3'>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className='text-xl text-purple-900 underline'>mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;