
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 mt-3 ml-2 bg-slate-200 rounded-xl">
            <div className="text-center rounded-xl bg-slate-300 p-3 m-2">
                <h2 className="text-3xl font-bold">reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center font-bold">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;