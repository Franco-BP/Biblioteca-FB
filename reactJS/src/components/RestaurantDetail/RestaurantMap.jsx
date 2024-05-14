import * as React from 'react';

const RestaurantMap = () => {

    return <div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34929.09547090092!2d-54.93118254766098!3d-34.93387548023908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1690495307233!5m2!1ses-419!2suy" 
        style= {{ border: "0" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        className="Map">
        </iframe>
    </div>

};

export default RestaurantMap;