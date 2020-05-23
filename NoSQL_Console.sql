db.messages.aggregate(
    [
        {
            $match: {
                body: {$regex: /паровоз/, $options: 'si'}
            }
        },
        {
            $group: {
                _id: null,
                total: {
                    $sum: 1
                }
            }
        }
    ]
    )
