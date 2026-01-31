<script setup>
    defineProps(['modelValue', 'sportValue']);
    defineEmits(['update:modelValue', 'update:sportValue']);

    const sports = ['Soccer', 'Basketball', 'Motorsport'];
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field
                    label="Search League Name"
                    variant="outlined"
                    :model-value="modelValue"
                    @update:model-value="$emit('update:modelValue', $event)"
                    clearable
                    class="rounded-lg"
                />
            </v-col>
            <v-col cols="12" md="6">
                <v-select
                    label="Sport Type"
                    :items="sports"
                    variant="outlined"
                    :model-value="sportValue"
                    @update:model-value="$emit('update:sportValue', $event)"
                    class="rounded-lg"
                />
            </v-col>
        </v-row>
    </v-container>
</template>