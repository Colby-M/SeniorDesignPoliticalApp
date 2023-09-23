<script lang="ts">
import IconBase from "../components/icons/IconBase.vue";
import IconApprove from "../components/icons/IconApprove.vue";

export default{
    components: {
        IconBase,
        IconApprove
    }
}
</script>

<template>
    <div class="IconTest">
        <IconBase iconColor="dark" iconSize="small" > <IconApprove></IconApprove> </IconBase>
        <IconBase iconColor="dark" iconSize="medium" > <IconApprove></IconApprove> </IconBase>
        <IconBase iconColor="dark" iconSize="large" > <IconApprove></IconApprove> </IconBase>
        <div class="bg-dark">
            <IconBase iconColor="light" iconSize="large" > <IconApprove></IconApprove> </IconBase>
        </div>
        <IconBase> <IconApprove/> </IconBase>
    </div>
</template>
