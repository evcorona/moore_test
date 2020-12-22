let newProjectActivity = `<form action="" class="border border-primary p-3 mt-2 project-activity">
<div class="d-flex justify-content-between">
    <div class="form-group w-100 m-1">
        <label for="">Cliente</label>
        <input type="text" class="form-control myborder" name="title" placeholder="Introduce el cliente">
    </div>
    <div class="form-group w-100 m-1">
        <label for="">Proyecto</label>
        <input type="text" class="form-control myborder" name="title" placeholder="Introduce el proyecto">
    </div>
</div>
<div class="d-flex justify-content-between">
    <div class="form-group w-100 m-1">
        <label for="">Actividad</label>
        <select class="custom-select myborder" name="category">
            <option disabled selected>Selecciona un tipo de actividad</option>
            <option value="Comics">Consultoría</option>
            <option value="Videogames">Auditoria</option>
            <option value="Movie">Administración</option>
            <option value="Movie">Estudio</option>
            <option value="Movie">Capacitación</option>
            <option value="Movie">Otra</option>
        </select>
    </div>
    <div class="form-group w-30 m-1">
        <label for="">Horas trabajadas</label>
        <input type="number" class="form-control myborder" name="title" placeholder="Introduce las horas">
    </div>
</div>
<button type="button" class="btn btn-primary m-2 btn-save-project">Guardar</button>
<button type="button" class="btn btn-primary m-2 btn-project">Otra actividad</button>
</form>`

let newInternalActivity = `
<form action="" class="border border-success p-3 mt-2 internal-activity">
<div class="d-flex justify-content-between">
    <div class="form-group w-100 m-1">
        <label for="">Actividad</label>
        <select class="custom-select myborder" name="category">
            <option disabled selected>Selecciona un tipo de actividad</option>
            <option value="Comics">Tiempo personal autorizado</option>
            <option value="Comics">Tiempo personal no autorizado</option>
            <option value="Videogames">Vacaciones autorizadas</option>
            <option value="Comics">Incapacidad</option>
        </select>
    </div>
    <div class="form-group w-100 m-1">
        <label for="">Tiempo consumido</label>
        <input type="number" class="form-control myborder" name="title"
            placeholder="Introduce el tiempo consumido">
    </div>
</div>
<div class="d-flex justify-content-between">
    <div class="form-group w-100 m-1">
        <label for="">Fecha inicio</label>
        <input type="date" class="form-control myborder" name="title"
            placeholder="Introduce el tiempo consumido">
    </div>
    <div class="form-group w-100 m-1">
        <label for="">Fecha final</label>
        <input type="date" class="form-control myborder" name="title"
            placeholder="Introduce el nombre del personal">
    </div>
</div>
<button type="button" class="btn btn-primary m-2 btn-save-internal">Guardar</button>
<button type="button" class="btn btn-primary m-2 btn-internal">Otra actividad</button>
</form>`

const addBtnListener = () => {
    $(".btn-project").click(event => {
        $(".form-project").append(newProjectActivity)
        addBtnListener()
        addbtnSaveListener()
    })
}

const addbtnSaveListener = () => {
    $(".btn-save-project").click(event => {
        $(event.target).text("Guardado")
    })
    $(".btn-save-internal").click(event => {
        $(event.target).text("Guardado")
    })
}

const addBtnListener2 = () => {
    $(".btn-internal").click(event => {
        $(".form-internal").append(newInternalActivity)
        addBtnListener2()
        addbtnSaveListener()
    })
}

addBtnListener()
addbtnSaveListener()
addBtnListener2()