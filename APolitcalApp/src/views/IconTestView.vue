<script lang="ts" setup>
import IconBase from "../components/icons/IconBase.vue";
import IconApprove from "../components/icons/IconApprove.vue";

</script>

<template>
    <div class="IconTest">
        <IconBase iconColor="dark" iconSize="small" > <IconApprove></IconApprove> </IconBase>
        <IconBase iconColor="dark" iconSize="medium" > <IconApprove></IconApprove> </IconBase>
        <IconBase iconColor="dark" iconSize="large" > <IconApprove></IconApprove> </IconBase>
        <div class="bg-dark-5">
            <IconBase iconColor="light" iconSize="large" > <IconApprove></IconApprove> </IconBase>
        </div>
        <IconBase> <IconApprove/> </IconBase>
    </div>
</template>
