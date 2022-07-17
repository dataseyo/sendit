import Boulder from "../models/boulderModel.js"; 

// read: get list of all boulders from db
export const getBoulders = (req, res) => {
    Boulder.find()
        .exec((err, list_boulders) => {
            if (err) { console.log(err) }
            res.json(list_boulders)
        })
}

// create: add new boulder to db
export const createBoulder = async (req, res) => {
    const boulder = new Boulder({
        name: req.body.name,
        location: req.body.location,
        grade: req.body.grade,
        rating: req.body.rating
    })

    console.log(boulder)

    try {
        await boulder.save()
        res.send("new boulder added")
    } catch(error) {
        console.log(error)
    }

}

// edit: edit existing boulder in db
export const editBoulder = (req, res) => {
   
}

// delete: remove boulder from db
export const deleteBoulder = (req, res) => {
    console.log("deleted")
    Boulder.findByIdAndDelete(req.body.id, (err, deleted_file) => {
        if (err) {
            console.log(err)
        } else {
            console.log("deleted", deleted_file)
        }
    })
}

// // remove boulder from db
// export const deleteBoulder = (req, res) => {
//     console.log(req.body.id)
//     Boulder.deleteOne({ _id:  req.body.id}, (err, result) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(result)
//         }
//     })















// import Boulder from "../models/boulderModel.js";

// // add boulder to db
// export const createBoulder = async (req, res) => {
//     const boulder = new Boulder({
//         name: req.body.name,
//         grade: req.body.grade,
//         crag: req.body.crag,
//         rating: req.body.rating
//     })

//     try {
//         await boulder.save()
//         res.send("boulder successfully added")
//     } catch (error) {
//         console.log(error)
//     }
// }

// // remove boulder from db
// export const deleteBoulder = (req, res) => {
//     console.log(req.body.id)
//     Boulder.deleteOne({ _id:  req.body.id}, (err, result) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(result)
//         }
//     })
// }

// // edit existing boulder in db
// export const editBoulder = (req, res) => {
//     Boulder.findById(req.body.id, (err, boulder_edit) => {
//         if (err) { return next(err) }
//         console.log(req.body.id)
        
//         // else, update all fields
//         boulder_edit.name = req.body.name
//         boulder_edit.grade = req.body.grade
//         boulder_edit.crag = req.body.crag
//         boulder_edit.rating = req.body.rating

//         // save updates to db
//         boulder_edit.save()
//     })
// }

// // retrieve all boulders from db
// export const getBoulderList = (req, res, next) => {
//     Boulder.find()
//         .exec((err, list_boulders) => {
//             if (err) { return next(err) }
//             res.json(list_boulders)
//         })
// }

