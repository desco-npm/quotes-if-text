module.exports = (_data, _quote = '"') => {
    let data = _data

    if (typeof data === 'string') data = _quote + data + _quote

    return data
}