<template>
<div class="container">
    <h3 class="asu">ASU CONFIGURATOR</h3>
    <div class="col-md-12 spc">

        <form>
            <table class="mytable">
                <tr>
                    <td><span class="bt">Project Code(TM Number)</span>
                        <span>:<input type="text"></span>
                    </td>

                    <td><span class="bt">Facility Code</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:<input type="text"></span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Client Name</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:<input type="text"></span>
                    </td>

                    <td><span class="bt">Facility Name</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:<input type="text"></span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Plant Name</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:<input type="text"></span>
                    </td>

                    <td><span class="bt">Project Code</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:<input type="text"></span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Project Name</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:<input type="text"></span>
                    </td>

                    <td><span class="bt">Component Library Type</span>
                        <span>&emsp;&emsp;&nbsp;:<select style="-webkit-appearance: none; select">
                                <option selected>Individual Facility Wise</option>
                                <option>Project Wise</option>
                                <option>Universal (Shared across projects)</option>
                            </select>
                        </span>
                    </td>

                </tr>

            </table>

            <div>
                <button class="sub">Submit</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: "FormCre"
}
</script>

<style>
.bt {
    margin-left: 10px;
    margin-right: 50px;
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-weight: bold;
}

.spc {
    border: 1px solid black;
    padding: 30px 0px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}

.mytable {
    width: 80%;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    color:black;
}

.mytable td {
    padding: 5px;
}

.mytable td:first-child {
    border-right: 1px solid;
}

.sub {
    width: 13%;
    height: 25%;
    margin-left: 41%;
    margin-right: 35%;
    background: rgb(31, 101, 182);
    margin-top: 20px;
    padding: 5px 5px;
    font-size: 110%;
    background-color: #2c6779;
    border-radius: 5px;
}

.sub:hover {
    color: rgb(228, 95, 95);
}

.asu {
    text-align: center;
    font-size: 40px;
    margin: 100px;
    color:black;
}

input,
select{
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
    padding-left: 10px;
    display: block;
    float: right;
    border-radius: 5px;
    background-color: #f4f4f4;
}

</style>
