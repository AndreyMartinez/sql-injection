function hasSql(value) {
    if (value === null || value === undefined) {
        return true;
    }
    re = /(insert|delete|<|select|drop|where|orderBy|join)/i
    if (re.test(value)) {
        return true
    }
    return false;
}

module.exports = hasSql;
