module.exports = (_data, _quote = '"') => {
    let data = _data

    if (typeof data !== 'number' && isNaN(Number(_data))) data = _quote + data + _quote

    return data
}