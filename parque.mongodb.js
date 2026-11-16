// ============================================
// INSERTAR CINCO VEHICULOS
// ============================================

use("parque");

// Limpiar la colección para evitar duplicados
db.parque.deleteMany({});

// Insertar los cinco vehículos
db.parque.insertMany([
    {
        placa: "ABC123",
        numero_serie: "SER001",
        modelo: 2022,
        marca: "Toyota",
        kilometraje: 25000,
        tipo: "Automovil"
    },
    {
        placa: "DEF456",
        numero_serie: "SER002",
        modelo: 2021,
        marca: "Chevrolet",
        kilometraje: 35000,
        tipo: "Camioneta"
    },
    {
        placa: "GHI789",
        numero_serie: "SER003",
        modelo: 2023,
        marca: "Renault",
        kilometraje: 15000,
        tipo: "Automovil"
    },
    {
        placa: "JKL012",
        numero_serie: "SER004",
        modelo: 2020,
        marca: "Mazda",
        kilometraje: 50000,
        tipo: "Camioneta"
    },
    {
        placa: "MNO345",
        numero_serie: "SER005",
        modelo: 2024,
        marca: "Kia",
        kilometraje: 8000,
        tipo: "Automovil"
    }
]);

// Consultar los cinco vehículos insertados
db.parque.find({});
// ============================================
// ACTUALIZAR EL PRIMER VEHICULO
// ============================================

db.parque.updateOne(
    { placa: "ABC123" },
    {
        $set: {
            kilometraje: 27000,
            modelo: 2022
        }
    }
);

// ============================================
// ACTUALIZAR EL ULTIMO VEHICULO
// ============================================

db.parque.updateOne(
    { placa: "MNO345" },
    {
        $set: {
            kilometraje: 10000,
            modelo: 2024
        }
    }
);

// Consultar los registros actualizados
db.parque.find({});

// CONSULTAR TODOS LOS VEHICULOS

db.parque.find({}).sort({ placa: 1 });

// ============================================
// ELIMINAR EL TERCER VEHICULO
// ============================================

db.parque.deleteOne({
    placa: "GHI789"
});

// ============================================
// CONSULTAR NUEVAMENTE LA COLECCION
// ============================================

db.parque.find({});

// ============================================
// CONSULTAR VEHICULO POR NUMERO DE PLACA
// ============================================

db.parque.find({
    placa: "ABC123"
});S