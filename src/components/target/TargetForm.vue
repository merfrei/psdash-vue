<template>
    <form v-on:submit.prevent="formSubmit">
        <input v-if="sel.id" type="hidden" :value="sel.id" />
        <div class="form-group">
            <label for="targetDomainInput">Domain</label>
            <input v-model="target.domain" type="text" class="form-control" id="targetDomainInput" placeholder="example.com" required>
        </div>
        <div class="form-group">
            <label for="targetIdentifierInput">Identifier</label>
            <input v-model="target.identifier" type="text" class="form-control" id="targetIdentifierInput" placeholder="example.com" required>
        </div>
        <div class="form-group">
            <label for="targetSleepInput">Sleep (minutes)</label>
            <input v-model.number="target.blocked_standby" type="number" min="0" max="999999" class="form-control" id="targetSleepInput" required>
        </div>
        <div class="form-group">
            <label for="targetProviderSelect">Providers</label>
            <select v-model="target.providers" multiple class="form-control" id="targetProviderSelect">
                <option v-for="provider in providers" :key="provider.id" :value="provider.id">{{ provider.name }}</option>
            </select>
        </div>
        <div class="form-group">
            <label for="targetPlanSelect">Plans</label>
            <select v-model="target.plans" multiple class="form-control" id="targetPlanSelect">
                <option v-for="plan in plans" :key="plan.id" :value="plan.id">{{ plan.name }}</option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary" :value="formActionTxt" />
    </form>
</template>

<script>
export default {
    name: 'TargetForm',
    props: ['sel'],
    data() {
        return {
            target: {
                domain: '',
                identifier: '',
                blocked_standby: 15,
                providers: [],
                plans: []
            }
        }
    },
    computed: {
        providers () {
            return this.$store.getters.getProviders;
        },
        plans() {
            return this.$store.getters.getPlans;
        },
        formActionTxt() {
            if (this.sel.id) {
                return 'Edit';
            } else {
                return 'Create';
            }
        }
    },
    methods: {
        fetchData() {
            this.$api.sessionRequest(this.$api.GET('target', this.sel.id).then((resp) => {
                const target = resp.data.data;
                if (target.domain !== undefined) {
                    this.target.domain = target.domain;
                    this.target.identifier = target.identifier;
                    this.target.blocked_standby = target.blocked_standby;
                    this.target.providers = target.providers;
                    this.target.plans = target.plans;
                }
            }));
        },
        formSubmit() {
            if (this.sel.id) {
                this.$api.sessionRequest(this.$api.PUT('target', this.sel.id, this.target).then(() => {
                    this.$store.dispatch('fetchTargets', { api: this.$api });
                    this.$store.dispatch('closeModal');
                }));
            } else {
                this.$api.sessionRequest(this.$api.POST('target', this.target).then(() => {
                    this.$store.dispatch('fetchTargets', { api: this.$api });
                    this.$store.dispatch('closeModal');
                }));
            }
        }
    },
    created() {
        this.$store.dispatch('fetchProviders', { api: this.$api });
        this.$store.dispatch('fetchPlans', { api: this.$api });
        this.fetchData();
    }
}
</script>
