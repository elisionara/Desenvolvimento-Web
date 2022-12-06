const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

//Get Unique Point
exports.getUnique = async (request, response) => {
    const { id } = request.params;
    const intId = parseInt(id);

    if(!intId){
        return response.status(400).json("Id is mandatory");
    }

    const point = await prisma.point.findUnique({ where: {id: intId} });

    if(!point){
        return response.status(404).json("Point not exist");
    }

    return response.status(200).json(point)
}



//Create
exports.post = async (request, response) => {
    const { name, cep, city, address, number, pointReference, phone, mail, materials } = request.body;
    const point = await prisma.point.create({
        data: {
            name,
            cep,
            city,
            address,
            number,
            pointReference,
            phone,
            mail,
            materials
        }
    })
    return response.status(201).json(point);
};

//Read
exports.get = async (request, response) => {
    const { city, materials } = request.query;
    if (city == undefined && materials == undefined) {
        const point = await prisma.point.findMany({
            orderBy: {
                id: 'desc'
            },
        });
        return response.status(200).json(point)
    } else {
        const materialsList = materials.split("-");
        const point = await prisma.point.findMany({
            orderBy: {
                id: 'desc'
            },
            where: {
                city: {
                    equals: city,
                    mode: 'insensitive',
                },
                materials: {
                    hasSome: materialsList,
                },
            },
        });
        return response.status(200).json(point)
    }
}

//update
exports.put = async (request, response) => {
    const { id } = request.params;
    const intId = parseInt(id);
    const { name, cep, city, address, number, pointReference, phone, mail, materials } = request.body;

    if(!intId){
        return response.status(400).json("Id is mandatory");
    }

    const pointAlreadyExist = await prisma.point.findUnique({ where: {id: intId} });

    if(!pointAlreadyExist){
        return response.status(404).json("Point not exist");
    }
    const point = await prisma.point.update({
        where: {
            id: intId,
        },
        data: {
            name,
            cep,
            city,
            address,
            number,
            pointReference,
            phone,
            mail,
            materials
        }
    });

    return response.status(200).json(point);
};

//Delete
exports.delete = async (request, response) => {
    const { id } = request.params;
    const intId = parseInt(id);

    if(!intId){
        return response.status(400).json("Id is mandatory");
    }

    const pointAlreadyExist = await prisma.point.findUnique({ where: {id: intId} });

    if(!pointAlreadyExist){
        return response.status(404).json("Point not exist");
    }

    await prisma.point.delete({ where: { id: intId } });
    return response.status(200).send();
};
