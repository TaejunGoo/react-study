import './SlideCategory.scss';

const SlideCategory = ({ slideTag }) => {
    
    return (
        <div className="SlideCategory">
            <div className="tag tag_top_left">
                {slideTag.isNewEpisode && <span className="tag_label tag_new">NEW</span>}
            </div>
            <div className="tag tag_top_right">
                {slideTag.isGrade19 && <span className="tag_label tag_grade"></span>}
                {slideTag.isFree && <span className="tag_label tag_free">무료</span>}
                {slideTag.isDubbing && <span className="tag_label tag_dubbing">더빙</span>}
            </div>
            <div className="tag tag_bottom">
                {slideTag.isOriginal && <span className="tag_label tag_original"><strong className="v">V</strong> Original</span>}
                {slideTag.isOnly && <span className="tag_label tag_only"><strong className="v">V</strong> Only</span>}
            </div>
        </div>
    )
}

export default SlideCategory;