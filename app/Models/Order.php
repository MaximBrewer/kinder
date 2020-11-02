<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */

    protected $fillable = [
        'name_id', 'age', 'achieve_id', 'hobby_id', 'from_id', 'email', 'gift_id', 'photo', 'hash', 'news', 'email_hash', 'status'
    ];

    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }
}
