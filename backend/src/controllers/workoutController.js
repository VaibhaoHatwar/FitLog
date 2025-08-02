export const getWorkouts = (req, res) => { 
    res.json({mssg: 'Get all workouts'})
 }

export const getWorkout = (req, res) => { 
    res.json({mssg: 'Get a  single workout'})
 }
 
export const createWorkout = (req, res) => { 
    res.json({mssg: 'Create a new workout'})
 }

export const deleteWorkout = (req, res) => { 
    res.json({mssg: 'Delete a workout'})
 }

export const updateWorkout = (req, res) => { 
    res.json({mssg: 'Update a workout'})
 }