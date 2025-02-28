import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])

    // Fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    //Function to calculate avrage rating of course
    const calculateRating = (course) => {
        if (!course || !Array.isArray(course.courseRatings)) {
            return 0; 
        }
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0);
        return totalRating / course.courseRatings.length;
    };
    

    useEffect(() => {
        fetchAllCourses()
    },[])

    const value = {
        currency , allCourses , navigate , calculateRating
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}