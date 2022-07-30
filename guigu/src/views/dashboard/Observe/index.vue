<template>
    <div>
        <el-row :gutter="10">
        <el-col :span="12">
                 <Search></Search>
        </el-col>
        <el-col :span="12">
                 <Catrgory></Catrgory>
        </el-col>
        </el-row>
    </div>
</template>

<script>
import Catrgory from './Catrgory'
import Search from './Search'
export default {
    name:'',
    components:{
        Catrgory,
        Search
    }
}
</script>

<style>

</style>