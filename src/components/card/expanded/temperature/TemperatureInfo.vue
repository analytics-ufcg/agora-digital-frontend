<template>
  <div>
    <div class="info">
      <div v-if="temTemperatura">
        Temperatura dos últimos 3 meses
        <el-tooltip
          placement="bottom"
          effect="light"
        >
          <div
            class="tooltip-content"
            slot="content"
            v-if="mostraTooltip"
          >
            <p v-if="this.temperatureInfo === 'subiu'">
              A temperatura <strong>subiu</strong> por causa dos eventos ocorridos nas últimas semanas.
            </p>
            <p v-else-if="this.temperatureInfo === 'desceu'">
              A temperatura <strong>desceu</strong> porque não houveram (muitos) eventos nas últimas semanas.
            </p>
            <p v-else>A temperatura <strong>se manteve constante</strong> considerando eventos nas últimas semanas.</p>
          </div>
          <span
            target="_blank"
            class="link icon-info">
            <i class="bx bx-info-circle"/>
          </span>
        </el-tooltip>
      </div>
      <div v-else>
        Não houve temperatura significativa nos últimos 3 meses.
        <el-tooltip
          placement="bottom"
          effect="light"
        >
          <div
            class="tooltip-content"
            slot="content"
            v-if="mostraTooltip"
          >
            <p>Temperaturas <strong>abaixo de 1</strong> não são exibidas no gráfico.</p>
          </div>
          <span
            target="_blank"
            class="link icon-info">
            <i class="bx bx-info-circle"/>
          </span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TemperatureInfo',
  props: {
    id: {
      type: String,
      default: undefined
    },
    coeficiente_temperatura: {
      type: Number,
      default: 0
    },
    mostraTooltip: {
      type: Boolean,
      default: false
    },
    temTemperatura: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    temperatureInfo () {
      if (this.coeficiente_temperatura < 0) { return 'desceu' } else if (this.coefficient > 0) { return 'subiu' } else { return 'se manteve constante' }
    }
  }

}
</script>

<style lang="scss" scoped>
.info {
  color: #555;
  text-align: center;
}
.tooltip-content {
  p {
      margin: 0;
  }
  max-width: 200px;
}
.link {
  cursor: pointer;
  color: #AA67AE;
}
.icon-info {
  margin: 12px 4px 10px 4px;
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
