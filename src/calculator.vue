<template>
    <form>
        <fieldset>
            <div class="row">
                <div class="column column-50">
                    <input placeholder="localhost" type="text" v-model="hostname">
                </div>
                <div class="column column-25">
                    <input placeholder="0" type="number" v-model.number="offset">
                </div>
                <div class="column column-25">
                    <a class="button" v-bind:class="{ 'button-outline': detail }" v-on:click="toggleDetail()">Detail</a>
                </div>
            </div>

            <div v-show="detail">
                <div class="row box">
                    <div class="column">
                        <h4>Port configuration</h4>
                    </div>
                </div>
                <div class="row box">
                    <div class="column column-50">
                        <label for="http">http</label>
                        <input name="http" placeholder="8080" type="number" v-model.number="http">
                        <label for="https">https</label>
                        <input name="https" placeholder="8443" type="number" v-model.number="https">
                        <label for="management-http">management-http</label>
                        <input name="management-http" placeholder="9990" type="number" v-model.number="managementHttp">
                        <label for="management-https">management-https</label>
                        <input name="management-https" placeholder="9993" type="number" v-model.number="managementHttps">
                    </div>
                    <div class="column column-50">
                        <label for="ajp">ajp</label>
                        <input name="ajp" placeholder="8009" type="number" v-model.number="ajp">
                        <label for="txn-recovery-environment">txn-recovery-environment</label>
                        <input name="txn-recovery-environment" placeholder="4712" type="number" v-model.number="txnRecoveryEnvironment">
                        <label for="txn-status-manager">txn-status-manager</label>
                        <input name="txn-status-manager" placeholder="4713" type="number" v-model.number="txnStatusManager">
                    </div>
                </div>
            </div>
        </fieldset>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Port</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>http</td>
                    <td>{{ http + offset}}</td>
                    <td><a v-bind:href="'http://' + hostname + ':' + (http + offset)">http://{{ hostname }}:{{ http + offset}}</a></td>
                </tr>
                <tr>
                    <td>https</td>
                    <td>{{ https + offset}}</td>
                    <td><a v-bind:href="'https://' + hostname + ':' + (https + offset)">https://{{ hostname }}:{{ https + offset}}</a></td>
                </tr>
                <tr>
                    <td>management-http</td>
                    <td>{{ managementHttp + offset}}</td>
                    <td><a v-bind:href="'http://' + hostname + ':' + (managementHttp + offset)">http://{{ hostname }}:{{ managementHttp + offset}}</a></td>
                </tr>
                <tr>
                    <td>management-https</td>
                    <td>{{ managementHttps + offset}}</td>
                    <td><a v-bind:href="'https://' + hostname + ':' + (managementHttps + offset)">https://{{ hostname }}:{{ managementHttps + offset}}</a></td>
                </tr>
                <tr>
                    <td>ajp</td>
                    <td>{{ ajp + offset}}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>txn-recovery-environment</td>
                    <td>{{ txnRecoveryEnvironment + offset}}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>txn-status-manager</td>
                    <td>{{ txnStatusManager + offset}}</td>
                    <td></td>
                </tr>
            </tbody>
            </table>
    </form>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            detail: false,

            offset: 0,
            hostname: 'localhost',

            http: 8080,
            https: 8443,
            managementHttp: 9990,
            managementHttps: 9993,
            ajp: 8009,
            txnRecoveryEnvironment: 4712,
            txnStatusManager: 4713
        }
    },
    methods: {
        setOffset(offset) {
            this.offset = offset;
        },
        toggleDetail() {
            this.detail = !this.detail;
        }
    }
}
</script>
