<template>
<div>
    <h1 class="asu">ASU CONFIGURATOR</h1>
    <h5 class="list">List of all Projects</h5>
    <table>
        <thead  >
            <tr>
                <th>S.No</th>
                <th>Project Code</th>
                <th>Facility Code</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Facility Name</th>
                <th>Creo Project Code</th>
                <th>Component Library</th>
                <th>Project Status</th>
            </tr>
        </thead>
    </table>
</div>
</template>

<script>
    export default{
        name : 'FormTab'
    }
</script>

<style scoped>
table {
    width: 90%;
    max-width: 90%;
    background-color: #337ab7;
    border-collapse: collapse;
    border-top: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    margin-left: auto;
    margin-right: auto;
}

table thead th {
    vertical-align: bottom;
}

td,
th {
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    color: white;
}

table td,
table th {
    padding: 0.75rem;
    vertical-align: top;
}

.asu {
    text-align: center;
    font-size: 40px;
    margin: 100px;
}

.list {
    text-align: center;
    font-size: 30px;
    margin: 30px;
    color: black;
}

</style>
