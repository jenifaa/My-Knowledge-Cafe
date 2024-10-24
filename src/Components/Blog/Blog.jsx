
import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    const {title, cover,author,posted_date, author_img, reading_time,hashtag} = blog;
    return (
        <div>
           <div> <img className='rounded-xl' src={cover} alt="" /></div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                   <div>
                    <p>{author}</p>
                    <p>{posted_date}</p>
                   </div>

                </div>
                <div>
                    <p>{reading_time} min read</p>
                    <button></button>

                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>

            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;