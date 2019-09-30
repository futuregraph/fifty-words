const YANDEX_METRICA_ID = 55558903

export const reachMetricaGoal = (goalId) => ym(YANDEX_METRICA_ID, 'reachGoal', goalId)